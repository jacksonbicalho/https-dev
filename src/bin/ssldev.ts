#! /usr/bin/env node

import importLocal from 'import-local';

if (!importLocal(__filename)) {
  require('../cli/ssl-cli');
}
