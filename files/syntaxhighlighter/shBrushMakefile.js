/*#  Copyright 2015 pq <http://p--q.blogspot.jp/>
#  
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 2 of the License, or
#  (at your option) any later version.
#  
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#  
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.
#  
#*/
;(function(){
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;
    function Brush(){
        var functions =  'subst patsubst strip findstring filter filter-out sort dir notdir suffix basename addsuffix addprefix join word wordlist words firstword wildcard foreach origin shell';
        var constants = 'PHONY SUFFIXES DEFAULT PRECIOUS INTERMEDIATE SECONDARY IGNORE SILENT EXPORT_ALL_VARIABLES';
        this.regexList = [
            { regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },  // one line comments
            { regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },	// double quoted strings
            { regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },	// single quoted strings
            { regex: /\$\([^\@%<\?\^\+\*]\w+\)/gm,					        css: 'variable' },  // Variables
            { regex: /((\$\(?[\@%<\?\^\+\*](D\)|F\))*)|%|\$&lt;)/gm,				css: 'keyword' },   // Automatic Variables
            //{ regex: /\$&lt;/gm,				css: 'keyword' },
            { regex: new RegExp(this.getKeywords(functions), 'gm'),			css: 'functions' }, // Functions for String Substitution and Analysis
            { regex: new RegExp(this.getKeywords(constants), 'gm'),			css: 'constants' }  // Special Built-in Target Names  
        ];
    }
    Brush.prototype	= new SyntaxHighlighter.Highlighter();
    Brush.aliases	= ['Makefile'];
    SyntaxHighlighter.brushes.Makefile = Brush;
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();