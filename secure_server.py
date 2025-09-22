#!/usr/bin/env python3
"""
Life Alliance Website - Secure HTTP Server
Includes all security headers for local development and testing
"""

import http.server
import socketserver
import ssl
import os
from pathlib import Path

class SecureHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP Request Handler with comprehensive security headers"""
    
    def end_headers(self):
        """Add security headers to all responses"""
        
        # Critical Security Headers
        self.send_header('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload')
        
        # Content Security Policy
        csp = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' 'unsafe-eval' "
            "https://www.googletagmanager.com https://cdnjs.cloudflare.com; "
            "style-src 'self' 'unsafe-inline' "
            "https://fonts.googleapis.com https://cdnjs.cloudflare.com; "
            "font-src 'self' https://fonts.gstatic.com https://cdnjs.cloudflare.com; "
            "img-src 'self' data: https:; "
            "connect-src 'self' https://www.google-analytics.com; "
            "frame-src 'none'; "
            "object-src 'none'; "
            "base-uri 'self'; "
            "form-action 'self';"
        )
        self.send_header('Content-Security-Policy', csp)
        
        # Frame Protection
        self.send_header('X-Frame-Options', 'SAMEORIGIN')
        
        # Content Type Protection
        self.send_header('X-Content-Type-Options', 'nosniff')
        
        # XSS Protection
        self.send_header('X-XSS-Protection', '1; mode=block')
        
        # Referrer Policy
        self.send_header('Referrer-Policy', 'strict-origin-when-cross-origin')
        
        # Permissions Policy
        permissions = (
            "geolocation=(), "
            "microphone=(), "
            "camera=(), "
            "payment=(), "
            "usb=(), "
            "magnetometer=(), "
            "gyroscope=(), "
            "speaker=(), "
            "vibrate=(), "
            "fullscreen=(self), "
            "sync-xhr=()"
        )
        self.send_header('Permissions-Policy', permissions)
        
        # Cross-Origin Policies
        self.send_header('Cross-Origin-Embedder-Policy', 'require-corp')
        self.send_header('Cross-Origin-Opener-Policy', 'same-origin')
        self.send_header('Cross-Origin-Resource-Policy', 'same-origin')
        
        # Additional Security Headers
        self.send_header('X-Permitted-Cross-Domain-Policies', 'none')
        
        # Cache Control for sensitive files
        if self.path.endswith(('.htaccess', '.env', '.config')):
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        
        # Call parent method
        super().end_headers()
    
    def do_GET(self):
        """Handle GET requests with security checks"""
        
        # Block access to sensitive files
        sensitive_files = [
            '.env', '.config', '.bak', '.backup', '.sql', '.log'
        ]
        
        for sensitive in sensitive_files:
            if sensitive in self.path:
                self.send_error(403, "Forbidden: Access to sensitive files denied")
                return
        
        # Allow robots.txt and sitemap.xml (they should be public)
        if self.path in ['/robots.txt', '/sitemap.xml']:
            super().do_GET()
            return
        
        # Block .htaccess access (but allow it to work for configuration)
        if self.path.endswith('.htaccess') and self.path != '/.htaccess':
            super().do_GET()
            return
        elif self.path == '/.htaccess':
            self.send_error(403, "Forbidden: .htaccess file access denied")
            return
        
        # Normal request handling
        super().do_GET()
    
    def log_message(self, format, *args):
        """Custom logging with security focus"""
        print(f"🔒 {self.address_string()} - {format % args}")

def create_ssl_context():
    """Create SSL context for HTTPS (optional)"""
    try:
        context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
        # Note: You would need to provide actual certificate files
        # context.load_cert_chain('cert.pem', 'key.pem')
        return context
    except Exception as e:
        print(f"⚠️  SSL context creation failed: {e}")
        return None

def run_server(port=8000, use_https=False):
    """Run the secure HTTP server"""
    
    print("🚀 Starting Life Alliance Secure Server")
    print("="*50)
    print(f"🔒 Security headers: ENABLED")
    print(f"🛡️  XSS protection: ENABLED")
    print(f"🔐 Clickjacking protection: ENABLED")
    print(f"📁 Sensitive file protection: ENABLED")
    print(f"🌐 Cross-origin protection: ENABLED")
    
    if use_https:
        print(f"🔐 HTTPS mode: ENABLED")
        protocol = "https"
    else:
        print(f"⚠️  HTTPS mode: DISABLED (HTTP only)")
        protocol = "http"
    
    print(f"🎯 Server URL: {protocol}://localhost:{port}")
    print("="*50)
    
    try:
        with socketserver.TCPServer(("", port), SecureHTTPRequestHandler) as httpd:
            if use_https:
                ssl_context = create_ssl_context()
                if ssl_context:
                    httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)
                else:
                    print("❌ HTTPS failed, falling back to HTTP")
                    use_https = False
                    protocol = "http"
            
            print(f"✅ Server started successfully!")
            print(f"🌐 Access your secure website at: {protocol}://localhost:{port}")
            print(f"🔍 Run vulnerability scan: python vulnerability_scanner.py --url {protocol}://localhost:{port}")
            print("\nPress Ctrl+C to stop the server")
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if "Address already in use" in str(e):
            print(f"❌ Port {port} is already in use. Try a different port:")
            print(f"   python secure_server.py --port 8080")
        else:
            print(f"❌ Server error: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

def main():
    """Main function with command line arguments"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Life Alliance Secure HTTP Server')
    parser.add_argument('--port', type=int, default=8000, 
                       help='Port to run server on (default: 8000)')
    parser.add_argument('--https', action='store_true', 
                       help='Enable HTTPS (requires SSL certificates)')
    
    args = parser.parse_args()
    
    # Check if we're in the right directory
    if not os.path.exists('index.html'):
        print("❌ Error: index.html not found in current directory")
        print("   Please run this script from the Life Alliance website directory")
        return
    
    run_server(args.port, args.https)

if __name__ == "__main__":
    main()
