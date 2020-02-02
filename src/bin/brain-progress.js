#!/usr/bin/env node
import getEngine from '../index.js';
import progressGame from '../games/progressgame.js';

getEngine(progressGame());
