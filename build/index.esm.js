import { A as ActiveRouter } from './active-router-91f96e9c.js';
import './match-path-760e1797.js';
import './index-bf2c0524.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}