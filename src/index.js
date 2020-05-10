import express from 'express';
import Server from './server';
import config from './config';

import loadAppSetup from './loaders';

const app = express();

loadAppSetup({ app });

const server = new Server({ app, port: config.port });

server.start();
