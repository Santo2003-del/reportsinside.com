#!/bin/bash

# Configuration
REPO_URL="https://github.com/Santo2003-del/reportsinside.com.git"
TARGET_DIR="/var/www/reportsinsider.com"
NGINX_CONF_PATH="/etc/nginx/sites-available/reportsinsider.com"
NGINX_ENABLED_PATH="/etc/nginx/sites-enabled/reportsinsider.com"

set -e # Exit on any error

echo "🚀 Starting PRODUCTION deployment for reportsinsider.com..."

# 1. Check for required tools
command -v git >/dev/null 2>&1 || { echo >&2 "❌ Git is required but not installed. Aborting."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo >&2 "❌ NPM is required but not installed. Aborting."; exit 1; }

# 2. Sync Repository
if [ ! -d "$TARGET_DIR" ]; then
    echo "📂 Cloning repository..."
    sudo git clone $REPO_URL $TARGET_DIR
else
    echo "🔄 Pulling latest changes..."
    cd $TARGET_DIR
    sudo git pull origin main
fi

# 3. Environment Check
if [ ! -f "$TARGET_DIR/frontend/.env" ]; then
    echo "⚠️ Warning: .env file missing in $TARGET_DIR/frontend/"
    echo "Please create a .env file from .env.example before running this script again."
    # exit 1 # Uncomment if you want to force .env existence
fi

# 4. Build Frontend
echo "📦 Building frontend..."
cd $TARGET_DIR/frontend
sudo npm install --include=dev
sudo npm run build

# 5. Setup NGINX Configuration
echo "⚙️ Configuring NGINX..."
sudo cp $TARGET_DIR/deployment/nginx.conf $NGINX_CONF_PATH
sudo ln -sf $NGINX_CONF_PATH $NGINX_ENABLED_PATH

# Remove default config if it exists
if [ -f "/etc/nginx/sites-enabled/default" ]; then
    echo "🗑️ Removing default NGINX config..."
    sudo rm /etc/nginx/sites-enabled/default
fi

# 6. Test and Reload nginx
echo "🧪 Testing NGINX config..."
sudo nginx -t

echo "🔄 Reloading NGINX..."
sudo systemctl reload nginx

echo "✅ Deployment successful! Website is live at reportsinsider.com"
