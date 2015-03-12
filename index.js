/* Copyright 2015 Alex Layton
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var path = require('path');

console.log('REQUIRED');

/* Keep myself from being cached */
Object.defineProperty(require.cache, module.id, {
    get: function() { return undefined; }
});

module.exports = function(name) {
    var loc = name;

    /* Handle relavtive paths */
    if (loc[0] === '.') {
        var from = module.parent.filename;

        /* Handle running from REPL */
        if (module.parent.id === 'repl') {
            from = from.replace(/\/repl$/, '');
        }

        /* Resolve path relative to parent module */
        loc = path.resolve(from, name);
    }

    var id = require.resolve(loc);

    /* Ensure we don't get the cached version */
    delete require.cache[id];

    return require(id);
};
