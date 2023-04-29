window.MathJax = {
    tex: {
        tags: 'ams',
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        macros: {
            md: ['{\\mathop{}\\mathopen{\\mathrm{d}}}'],
            bR: ["{\\mathbf{R}}"],
            bbR: ["{\\mathbb{R}}"],
            E: ["{\\mathbb{E}}"]
        },
    },
    svg: {
        fontCache: 'global'
    },
 
}