import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(path.dirname(fileURLToPath(import.meta.url)), 'src/app/styles')],

    },
};

export default nextConfig;