import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
        // 'MYSQL_HOST': '127.0.0.1',
        'MYSQL_HOST': '195.88.211.70',
        'MYSQL_PORT': '3306',
        'MYSQL_DATABASE': 'enterce1_dt4modopuro',
        'MYSQL_USER': 'enterce1_admin',
        'MYSQL_PASSWORD': 'M@ypassq1212',
    }
};

export default nextConfig;
