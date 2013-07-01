<?phpclass FormatString {	static function HtmlEntityToHexUnicode($string) {		$string = str_replace('&Auml;', '\\u00C4', $string);		$string = str_replace('&auml;', '\\u00E4', $string);		$string = str_replace('&Ouml;', '\\u00D6', $string);		$string = str_replace('&ouml;', '\\u00F6', $string);		$string = str_replace('&Uuml;', '\\u00DC', $string);		$string = str_replace('&uuml;', '\\u00FC', $string);		$string = str_replace('&szlig;', '\\u00DF', $string);		$string = str_replace('&acute;', '\\u00B4', $string);		$string = str_replace('&Alpha;', '\\u0391', $string);		$string = str_replace('&alpha;', '\\u03B1', $string);		$string = str_replace('&amp;', '\\u0026', $string);		$string = str_replace('&asymp;', '\\u2248', $string);		$string = str_replace('&Auml;', '\\u00C4', $string);		$string = str_replace('&auml;', '\\u00E4', $string);		$string = str_replace('&bdquo;', '\\u201E', $string);		$string = str_replace('&Beta;', '\\u0392', $string);		$string = str_replace('&beta;', '\\u03B2', $string);		$string = str_replace('&brvbar;', '\\u00A6', $string);		$string = str_replace('&bull;', '\\u2022', $string);		$string = str_replace('&cent;', '\\u00A2', $string);		$string = str_replace('&Chi;', '\\u03A7', $string);		$string = str_replace('&chi;', '\\u03C7', $string);		$string = str_replace('&circ;', '\\u02C6', $string);		$string = str_replace('&clubs;', '\\u2663', $string);		$string = str_replace('&copy;', '\\u00A9', $string);		$string = str_replace('&dagger;', '\\u2020', $string);		$string = str_replace('&darr;', '\\u2193', $string);		$string = str_replace('&deg;', '\\u00B0', $string);		$string = str_replace('&Delta;', '\\u0394', $string);		$string = str_replace('&delta;', '\\u03B4', $string);		$string = str_replace('&diams;', '\\u2666', $string);		$string = str_replace('&divide;', '\\u00F7', $string);		$string = str_replace('&Eacute;', '\\u00C9', $string);		$string = str_replace('&eacute;', '\\u00E9', $string);		$string = str_replace('&Epsilon;', '\\u0395', $string);		$string = str_replace('&epsilon;', '\\u03B5', $string);		$string = str_replace('&equiv;', '\\u2261', $string);		$string = str_replace('&Eta;', '\\u0397', $string);		$string = str_replace('&eta;', '\\u03B7', $string);		$string = str_replace('&euro;', '\\u20AC', $string);		$string = str_replace('&fnof;', '\\u0192', $string);		$string = str_replace('&frac12;', '\\u00BD', $string);		$string = str_replace('&frac14;', '\\u00BC', $string);		$string = str_replace('&frac34;', '\\u00BE', $string);		$string = str_replace('&frasl;', '\\u2044', $string);		$string = str_replace('&Gamma;', '\\u0393', $string);		$string = str_replace('&gamma;', '\\u03B3', $string);		$string = str_replace('&ge;', '\\u2265', $string);		$string = str_replace('&gt;', '\\u003E', $string);		$string = str_replace('&harr;', '\\u2194', $string);		$string = str_replace('&hearts;', '\\u2665', $string);		$string = str_replace('&hellip;', '\\u2026', $string);		$string = str_replace('&infin;', '\\u221E', $string);		$string = str_replace('&int;', '\\u222B', $string);		$string = str_replace('&Iota;', '\\u0399', $string);		$string = str_replace('&iota;', '\\u03B9', $string);		$string = str_replace('&iquest;', '\\uBF;', $string);		$string = str_replace('&Kappa;', '\\u039A', $string);		$string = str_replace('&kappa;', '\\u03BA', $string);		$string = str_replace('&Lambda;', '\\u039B', $string);		$string = str_replace('&lambda;', '\\u03BB', $string);		$string = str_replace('&laquo;', '\\u00AB', $string);		$string = str_replace('&larr;', '\\u2190', $string);		$string = str_replace('&ldquo;', '\\u201C', $string);		$string = str_replace('&le;', '\\u2264', $string);		$string = str_replace('&lsaquo;', '\\u2039', $string);		$string = str_replace('&lsquo;', '\\u2018', $string);		$string = str_replace('&lt;', '\\u003C', $string);		$string = str_replace('&macr;', '\\u00AF', $string);		$string = str_replace('&mdash;', '\\u2014', $string);		$string = str_replace('&micro;', '\\u00B5', $string);		$string = str_replace('&middot;', '\\u00B7', $string);		$string = str_replace('&minus;', '\\u2212', $string);		$string = str_replace('&Mu;', '\\u039C', $string);		$string = str_replace('&mu;', '\\u03BC', $string);		$string = str_replace('&nbsp;', '\\u00A0', $string);		$string = str_replace('&ndash;', '\\u2013', $string);		$string = str_replace('&ne;', '\\u2260', $string);		$string = str_replace('&Nu;', '\\u039D', $string);		$string = str_replace('&nu;', '\\u03BD', $string);		$string = str_replace('&oline;', '\\u203E', $string);		$string = str_replace('&Omega;', '\\u03A9', $string);		$string = str_replace('&omega;', '\\u03C9', $string);		$string = str_replace('&Omicron;', '\\u039F', $string);		$string = str_replace('&omicron;', '\\u03BF;', $string);		$string = str_replace('&oplus;', '\\u2295', $string);		$string = str_replace('&oslash;', '\\uF8;', $string);		$string = str_replace('&Oslash;', '\\uD8;', $string);		$string = str_replace('&Ouml;', '\\u00D6', $string);		$string = str_replace('&ouml;', '\\u00F6', $string);		$string = str_replace('&para;', '\\u00B6', $string);		$string = str_replace('&permil;', '\\u2030', $string);		$string = str_replace('&Phi;', '\\u03A6', $string);		$string = str_replace('&phi;', '\\u03C6', $string);		$string = str_replace('&Pi;', '\\u03A0', $string);		$string = str_replace('&pi;', '\\u03C0', $string);		$string = str_replace('&plusmn;', '\\u00B1', $string);		$string = str_replace('&pound;', '\\u00A3', $string);		$string = str_replace('&Prime;', '\\u2033', $string);		$string = str_replace('&prime;', '\\u2032', $string);		$string = str_replace('&Psi;', '\\u03A8', $string);		$string = str_replace('&psi;', '\\u03C8', $string);		$string = str_replace('&quot;', '\\u0022', $string);		$string = str_replace('&radic;', '\\u221A', $string);		$string = str_replace('&raquo;', '\\u00BB', $string);		$string = str_replace('&rarr;', '\\u2192', $string);		$string = str_replace('&rdquo;', '\\u201D', $string);		$string = str_replace('&reg;', '\\u00AE', $string);		$string = str_replace('&Rho;', '\\u03A1', $string);		$string = str_replace('&rho;', '\\u03C1', $string);		$string = str_replace('&rsaquo;', '\\u203A', $string);		$string = str_replace('&rsquo;', '\\u2019', $string);		$string = str_replace('&sbquo;', '\\u201A', $string);		$string = str_replace('&sect;', '\\u00A7', $string);		$string = str_replace('&shy;', '\\u00AD', $string);		$string = str_replace('&Sigma;', '\\u03A3', $string);		$string = str_replace('&sigma;', '\\u03C3', $string);		$string = str_replace('&spades;', '\\u2660', $string);		$string = str_replace('&sum;', '\\u2211', $string);		$string = str_replace('&sup1;', '\\u00B9', $string);		$string = str_replace('&sup2;', '\\u00B2', $string);		$string = str_replace('&sup3;', '\\u00B3', $string);		$string = str_replace('&szlig;', '\\u00DF', $string);		$string = str_replace('&Tau;', '\\u03A4', $string);		$string = str_replace('&tau;', '\\u03C4', $string);		$string = str_replace('&there4;', '\\u2234', $string);		$string = str_replace('&tilde;', '\\u02DC', $string);		$string = str_replace('&times;', '\\u00D7', $string);		$string = str_replace('&trade;', '\\u2122', $string);		$string = str_replace('&uarr;', '\\u2191', $string);		$string = str_replace('&Upsilon;', '\\u03A5', $string);		$string = str_replace('&upsilon;', '\\u03C5', $string);		$string = str_replace('&Uuml;', '\\u00DC', $string);		$string = str_replace('&uuml;', '\\u00FC', $string);		$string = str_replace('&Xi;', '\\u039E', $string);		$string = str_replace('&xi;', '\\u03BE', $string);		$string = str_replace('&yen;', '\\u00A5', $string);		$string = str_replace('&Zeta;', '\\u0396', $string);		$string = str_replace('&zeta;', '\\u03B6', $string);		return $string;	}	static function HexUnicodeToHtmlEntity($string) {		$string = str_replace('\\u00C4', '&Auml;', $string);		$string = str_replace('\\u00E4', '&auml;', $string);		$string = str_replace('\\u00D6', '&Ouml;', $string);		$string = str_replace('\\u00F6', '&ouml;', $string);		$string = str_replace('\\u00DC', '&Uuml;', $string);		$string = str_replace('\\u00FC', '&uuml;', $string);		$string = str_replace('\\u00DF', '&szlig;', $string);		$string = str_replace('\\u00B4', '&acute;', $string);		$string = str_replace('\\u0391', '&Alpha;', $string);		$string = str_replace('\\u03B1', '&alpha;', $string);		$string = str_replace('\\u0026', '&amp;', $string);		$string = str_replace('\\u2248', '&asymp;', $string);		$string = str_replace('\\u00C4', '&Auml;', $string);		$string = str_replace('\\u00E4', '&auml;', $string);		$string = str_replace('\\u201E', '&bdquo;', $string);		$string = str_replace('\\u0392', '&Beta;', $string);		$string = str_replace('\\u03B2', '&beta;', $string);		$string = str_replace('\\u00A6', '&brvbar;', $string);		$string = str_replace('\\u2022', '&bull;', $string);		$string = str_replace('\\u00A2', '&cent;', $string);		$string = str_replace('\\u03A7', '&Chi;', $string);		$string = str_replace('\\u03C7', '&chi;', $string);		$string = str_replace('\\u02C6', '&circ;', $string);		$string = str_replace('\\u2663', '&clubs;', $string);		$string = str_replace('\\u00A9', '&copy;', $string);		$string = str_replace('\\u2020', '&dagger;', $string);		$string = str_replace('\\u2193', '&darr;', $string);		$string = str_replace('\\u00B0', '&deg;', $string);		$string = str_replace('\\u0394', '&Delta;', $string);		$string = str_replace('\\u03B4', '&delta;', $string);		$string = str_replace('\\u2666', '&diams;', $string);		$string = str_replace('\\u00F7', '&divide;', $string);		$string = str_replace('\\u00C9', '&Eacute;', $string);		$string = str_replace('\\u00E9', '&eacute;', $string);		$string = str_replace('\\u0395', '&Epsilon;', $string);		$string = str_replace('\\u03B5', '&epsilon;', $string);		$string = str_replace('\\u2261', '&equiv;', $string);		$string = str_replace('\\u0397', '&Eta;', $string);		$string = str_replace('\\u03B7', '&eta;', $string);		$string = str_replace('\\u20AC', '&euro;', $string);		$string = str_replace('\\u0192', '&fnof;', $string);		$string = str_replace('\\u00BD', '&frac12;', $string);		$string = str_replace('\\u00BC', '&frac14;', $string);		$string = str_replace('\\u00BE', '&frac34;', $string);		$string = str_replace('\\u2044', '&frasl;', $string);		$string = str_replace('\\u0393', '&Gamma;', $string);		$string = str_replace('\\u03B3', '&gamma;', $string);		$string = str_replace('\\u2265', '&ge;', $string);		$string = str_replace('\\u003E', '&gt;', $string);		$string = str_replace('\\u2194', '&harr;', $string);		$string = str_replace('\\u2665', '&hearts;', $string);		$string = str_replace('\\u2026', '&hellip;', $string);		$string = str_replace('\\u221E', '&infin;', $string);		$string = str_replace('\\u222B', '&int;', $string);		$string = str_replace('\\u0399', '&Iota;', $string);		$string = str_replace('\\u03B9', '&iota;', $string);		$string = str_replace('\\uBF;', '&iquest;', $string);		$string = str_replace('\\u039A', '&Kappa;', $string);		$string = str_replace('\\u03BA', '&kappa;', $string);		$string = str_replace('\\u039B', '&Lambda;', $string);		$string = str_replace('\\u03BB', '&lambda;', $string);		$string = str_replace('\\u00AB', '&laquo;', $string);		$string = str_replace('\\u2190', '&larr;', $string);		$string = str_replace('\\u201C', '&ldquo;', $string);		$string = str_replace('\\u2264', '&le;', $string);		$string = str_replace('\\u2039', '&lsaquo;', $string);		$string = str_replace('\\u2018', '&lsquo;', $string);		$string = str_replace('\\u003C', '&lt;', $string);		$string = str_replace('\\u00AF', '&macr;', $string);		$string = str_replace('\\u2014', '&mdash;', $string);		$string = str_replace('\\u00B5', '&micro;', $string);		$string = str_replace('\\u00B7', '&middot;', $string);		$string = str_replace('\\u2212', '&minus;', $string);		$string = str_replace('\\u039C', '&Mu;', $string);		$string = str_replace('\\u03BC', '&mu;', $string);		$string = str_replace('\\u00A0', '&nbsp;', $string);		$string = str_replace('\\u2013', '&ndash;', $string);		$string = str_replace('\\u2260', '&ne;', $string);		$string = str_replace('\\u039D', '&Nu;', $string);		$string = str_replace('\\u03BD', '&nu;', $string);		$string = str_replace('\\u203E', '&oline;', $string);		$string = str_replace('\\u03A9', '&Omega;', $string);		$string = str_replace('\\u03C9', '&omega;', $string);		$string = str_replace('\\u039F', '&Omicron;', $string);		$string = str_replace('\\u03BF;', '&omicron;', $string);		$string = str_replace('\\u2295', '&oplus;', $string);		$string = str_replace('\\uF8;', '&oslash;', $string);		$string = str_replace('\\uD8;', '&Oslash;', $string);		$string = str_replace('\\u00D6', '&Ouml;', $string);		$string = str_replace('\\u00F6', '&ouml;', $string);		$string = str_replace('\\u00B6', '&para;', $string);		$string = str_replace('\\u2030', '&permil;', $string);		$string = str_replace('\\u03A6', '&Phi;', $string);		$string = str_replace('\\u03C6', '&phi;', $string);		$string = str_replace('\\u03A0', '&Pi;', $string);		$string = str_replace('\\u03C0', '&pi;', $string);		$string = str_replace('\\u00B1', '&plusmn;', $string);		$string = str_replace('\\u00A3', '&pound;', $string);		$string = str_replace('\\u2033', '&Prime;', $string);		$string = str_replace('\\u2032', '&prime;', $string);		$string = str_replace('\\u03A8', '&Psi;', $string);		$string = str_replace('\\u03C8', '&psi;', $string);		$string = str_replace('\\u0022', '&quot;', $string);		$string = str_replace('\\u221A', '&radic;', $string);		$string = str_replace('\\u00BB', '&raquo;', $string);		$string = str_replace('\\u2192', '&rarr;', $string);		$string = str_replace('\\u201D', '&rdquo;', $string);		$string = str_replace('\\u00AE', '&reg;', $string);		$string = str_replace('\\u03A1', '&Rho;', $string);		$string = str_replace('\\u03C1', '&rho;', $string);		$string = str_replace('\\u203A', '&rsaquo;', $string);		$string = str_replace('\\u2019', '&rsquo;', $string);		$string = str_replace('\\u201A', '&sbquo;', $string);		$string = str_replace('\\u00A7', '&sect;', $string);		$string = str_replace('\\u00AD', '&shy;', $string);		$string = str_replace('\\u03A3', '&Sigma;', $string);		$string = str_replace('\\u03C3', '&sigma;', $string);		$string = str_replace('\\u2660', '&spades;', $string);		$string = str_replace('\\u2211', '&sum;', $string);		$string = str_replace('\\u00B9', '&sup1;', $string);		$string = str_replace('\\u00B2', '&sup2;', $string);		$string = str_replace('\\u00B3', '&sup3;', $string);		$string = str_replace('\\u00DF', '&szlig;', $string);		$string = str_replace('\\u03A4', '&Tau;', $string);		$string = str_replace('\\u03C4', '&tau;', $string);		$string = str_replace('\\u2234', '&there4;', $string);		$string = str_replace('\\u02DC', '&tilde;', $string);		$string = str_replace('\\u00D7', '&times;', $string);		$string = str_replace('\\u2122', '&trade;', $string);		$string = str_replace('\\u2191', '&uarr;', $string);		$string = str_replace('\\u03A5', '&Upsilon;', $string);		$string = str_replace('\\u03C5', '&upsilon;', $string);		$string = str_replace('\\u00DC', '&Uuml;', $string);		$string = str_replace('\\u00FC', '&uuml;', $string);		$string = str_replace('\\u039E', '&Xi;', $string);		$string = str_replace('\\u03BE', '&xi;', $string);		$string = str_replace('\\u00A5', '&yen;', $string);		$string = str_replace('\\u0396', '&Zeta;', $string);		$string = str_replace('\\u03B6', '&zeta;', $string);		return $string;	}}?>