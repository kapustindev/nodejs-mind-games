#!/usr/bin/env node
import getEngine from '../index.js';
import primeGame from '../games/primegame.js';

getEngine(primeGame());
