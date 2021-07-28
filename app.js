const ballon = document.getElementById('montgolfiere');
const nuageUn = document.getElementById('nuage-un');
const nuageDeux = document.getElementById('nuage-deux');
const nuageTrois = document.getElementById('nuage-trois');
const nuageQuatre = document.getElementById('nuage-quatre');
const nuageCinq = document.getElementById('nuage-cinq');
const montagnes = document.getElementById('montagnes');

const javascript = document.getElementById('javascript');
const react = document.getElementById('react');
const graphql = document.getElementById('graphql');

/*** positions de départ */
const ballonBottom = 5;
const nuageUnBottom = 40;
const nuageDeuxBottom = 70;
const nuageTroisBottom = 60;
const nuageQuatreBottom = 40;
const nuageCinqBottom = 60;

ballon.style.bottom = ballonBottom + '%' ;
nuageUn.style.bottom = nuageUnBottom + '%' ;
nuageDeux.style.bottom = nuageDeuxBottom + '%' ;
nuageTrois.style.bottom = nuageTroisBottom + '%' ;
nuageQuatre.style.bottom = nuageQuatreBottom + '%' ;
nuageCinq.style.bottom = nuageCinqBottom + '%' ;


function move() {
    const moveAxeY = window.scrollY;
    
    /** montgolfiere */
    ballon.style.bottom = ballonBottom + moveAxeY * 0.1 + '%' ;
    /** nuage un */
    nuageUn.style.bottom = nuageUnBottom + moveAxeY * 0.12 + '%' ;
    nuageUn.style.left = 75 + moveAxeY * 0.1 + '%' ;
    /** nuage deux */
    nuageDeux.style.bottom = nuageDeuxBottom + moveAxeY * 0.14 + '%' ;
    nuageDeux.style.left = 80 + moveAxeY * 0.15 + '%' ;
    /** nuage trois */
    nuageTrois.style.bottom = nuageTroisBottom + moveAxeY * 0.1 + '%' ;
    nuageTrois.style.left = 0 + moveAxeY * -0.12 + '%' ;
    /** nuage quatre */
    nuageQuatre.style.bottom = nuageQuatreBottom + moveAxeY * 0.18 + '%' ;
    nuageQuatre.style.left = 20 + moveAxeY * -0.15 + '%' ;
    /** nuage cinq */
    nuageCinq.style.bottom = nuageCinqBottom + moveAxeY * 0.2 + '%' ;
    nuageCinq.style.left = 60 + moveAxeY * 0.16 + '%' ;
    /**skills */
    javascript.style.left = 20 + moveAxeY * -1.2 + '%' ;
    react.style.left = 26 + moveAxeY * -1 + '%' ;
    graphql.style.left = 32 + moveAxeY * -0.8 + '%' ;
};

window.addEventListener('scroll', move);