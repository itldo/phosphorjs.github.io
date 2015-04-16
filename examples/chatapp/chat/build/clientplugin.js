"use strict";
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var chat;
(function (chat) {
    var clientplugin;
    (function (clientplugin) {
        /**
         * Initialize the chat client plugin.
         */
        function initialize(container) {
            // currently an empty stub
        }
        clientplugin.initialize = initialize;
    })(clientplugin = chat.clientplugin || (chat.clientplugin = {}));
})(chat || (chat = {})); // module chat.clientplugin
