import { getDefaultConfig } from 'expo/metro-config';

const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push('d.ts');

module.exports = config;
