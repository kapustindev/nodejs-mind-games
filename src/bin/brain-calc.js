#!/usr/bin/env node
import getEngine from '../index.js';
import calcGame from '../games/calcgame.js';

getEngine(calcGame());
