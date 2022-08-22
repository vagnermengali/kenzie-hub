import styled from "styled-components";

export const ContainerSection = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1400%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(18%2c 18%2c 20%2c 1)'%3e%3c/rect%3e%3cg mask='url(%26quot%3b%23SvgjsMask1401%26quot%3b)'%3e%3cpath d='M204 324L228 300L252 276M420 300L444 324L468 324L492 324L516 324L540 300M300 324L324 300M252 324L276 300L300 276L324 276L348 276M156 300L180 276L204 276L228 276L252 252L276 252L300 252M-12 300L12 300L36 300L60 300L84 300L108 300L132 300L156 300L180 300L204 324L228 324L252 324L276 324L300 324L324 324L348 300L372 300L396 300L420 300L444 300L468 300' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M462 300 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM246 276 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM534 300 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM318 300 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM342 276 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM294 252 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M468 228L492 252L516 252L540 252L564 252L588 252L612 252L636 252M396 228L420 252M84 252L108 276L132 276L156 276L180 252L204 252M12 252L36 276L60 276M252 228L276 204M-12 252L12 252L36 252L60 252L84 252L108 252L132 228L156 228L180 228L204 228L228 228L252 228L276 228L300 228L324 228L348 228L372 228L396 228L420 228L444 228L468 228L492 228L516 228' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M510 228 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM630 252 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM414 252 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM198 252 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM54 276 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM270 204 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M564 372L588 396L612 396L636 396L660 396M516 372L540 348M780 372L804 348L828 348M636 372L660 348L684 324M708 372L732 348L756 348M444 372L468 348M492 372L516 348M180 372L204 372M300 348L324 348L348 348M-12 324L12 324L36 324L60 348L84 348L108 348L132 372L156 372L180 372L204 348L228 348L252 348L276 348L300 348L324 372L348 372L372 372L396 372L420 372L444 372L468 372L492 372L516 372L540 372L564 372L588 372L612 372L636 372L660 372L684 372L708 372L732 372L756 372L780 372L804 372L828 372' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M822 372 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM654 396 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM534 348 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM822 348 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM678 324 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM750 348 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM462 348 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM510 348 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM198 372 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM342 348 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M444 204L468 180M492 204L516 180L540 180L564 180L588 204L612 204L636 204L660 204L684 204L708 204M348 204L372 180L396 180L420 180L444 180M228 180L252 204M516 204L540 204L564 204M684 228L708 252L732 252M732 228L756 204M324 204L348 180M-12 228L12 228L36 228L60 228L84 228L108 228L132 204L156 204L180 180L204 180L228 180L252 180L276 180L300 204L324 204L348 204L372 204L396 204L420 204L444 204L468 204L492 204L516 204L540 228L564 228L588 228L612 228L636 228L660 228L684 228L708 228L732 228L756 228L780 228' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M774 228 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM462 180 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM702 204 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM438 180 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM246 204 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM558 204 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM726 252 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM750 204 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM342 180 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M-12 348L12 348L36 348L60 372L84 372L108 372L132 396L156 396L180 396L204 396L228 396L252 372' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M246 372 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M372 156L396 132L420 132L444 132L468 132M300 156L324 180M132 180L156 180M-12 204L12 204L36 204L60 204L84 204L108 204L132 180L156 156L180 156L204 156L228 156L252 156L276 156L300 156L324 156L348 156L372 156L396 156L420 156L444 156L468 156L492 156' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M486 156 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM462 132 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM318 180 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM150 180 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M612 420L636 444L660 444M300 420L324 444L348 444L372 444L396 444L420 444M396 420L420 396L444 396L468 396L492 396M468 420L492 444L516 444L540 444L564 444L588 444L612 444L636 468M372 420L396 396M252 420L276 396L300 396L324 396L348 396L372 396M756 396L780 420L804 420L828 420M516 420L540 396L564 396M-12 372L12 372L36 372L60 396L84 396L108 396L132 420L156 420L180 420L204 420L228 420L252 420L276 420L300 420L324 420L348 420L372 420L396 420L420 420L444 420L468 420L492 420L516 420L540 420L564 420L588 420L612 420L636 420L660 420L684 420L708 396L732 396L756 396L780 396' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M774 396 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM654 444 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM414 444 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM486 396 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM630 468 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM390 396 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM366 396 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM822 420 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM558 396 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M-12 180L12 180L36 180L60 180L84 180L108 180L132 156L156 132L180 132L204 132L228 132L252 132L276 132L300 132L324 132L348 132' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M342 132 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M492 468L516 492L540 492L564 492L588 492M420 468L444 492L468 492L492 492M204 444L228 468L252 468L276 468M348 468L372 492L396 492L420 492L444 516L468 516L492 516M276 444L300 444M-12 396L12 396L36 396L60 420L84 420L108 420L132 444L156 444L180 444L204 444L228 444L252 444L276 444L300 468L324 468L348 468L372 468L396 468L420 468L444 468L468 468L492 468L516 468' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M510 468 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM582 492 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM486 492 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM270 468 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM486 516 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM294 444 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M420 108L444 84L468 84L492 84L516 84L540 84L564 84L588 84L612 84M348 108L372 84L396 84M324 108L348 84L372 60M612 108L636 132L660 132L684 132L708 132L732 132L756 132L780 132L804 132M60 156L84 132L108 132L132 108M156 108L180 84L204 84M516 108L540 132M-12 156L12 156L36 156L60 156L84 156L108 156L132 132L156 108L180 108L204 108L228 108L252 108L276 108L300 108L324 108L348 108L372 108L396 108L420 108L444 108L468 108L492 108L516 108L540 108L564 108L588 108L612 108L636 108L660 108L684 108' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4'%3e%3c/path%3e%3cpath d='M678 108 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM606 84 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM390 84 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM366 60 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM798 132 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM126 108 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM198 84 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0zM534 132 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1400'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cmask id='SvgjsMask1401'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3cpath d='M465 300 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM249 276 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM537 300 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM321 300 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM345 276 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM297 252 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M513 228 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM633 252 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM417 252 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM201 252 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM57 276 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM273 204 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M825 372 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM657 396 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM537 348 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM825 348 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM681 324 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM753 348 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM465 348 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM513 348 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM201 372 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM345 348 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M777 228 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM465 180 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM705 204 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM441 180 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM249 204 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM561 204 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM729 252 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM753 204 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM345 180 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M249 372 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M489 156 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM465 132 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM321 180 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM153 180 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M777 396 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM657 444 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM417 444 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM489 396 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM633 468 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM393 396 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM369 396 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM825 420 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM561 396 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M345 132 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M513 468 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM585 492 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM489 492 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM273 468 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM489 516 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM297 444 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3cpath d='M681 108 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM609 84 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM393 84 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM369 60 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM801 132 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM129 108 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM201 84 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0zM537 132 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;

    @media(max-width: 950px) {
   
    }
    @media(max-width: 600px) {
       
    }
`
export const Div = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        width:65%;
        height:60%;
        box-shadow: 0px 4px 40px -10px var(--shadow);
        border-radius: 0.3vw ;

        @media(max-width: 950px) {
                width:80%;
        }
        @media(max-width: 600px) {
            
            flex-direction:column-reverse;
            width:90%;
        }
`
export const Img = styled.img`
        width: 50%;
    @media(max-width: 950px) {
        width:70%;
    }
    @media(max-width: 600px) {
        width: 40%;
        
    }
`
export const DivContentLeft = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    text-align:center;
    flex-direction:column;
    background: var(--gray-3);
    padding: 4%;
    border-radius: 0.3vw 0 0 0.3vw;
    width:100%;
    height:100%;

    h1 {
        width:90%;
        font-weight: 600;
        font-size: 1.05vw;
        color: var(--gray-0);
    }
    .img {
        width:50%;
    }
    @media(max-width: 950px) {
        .img {
            width:70%;
        }
        h1 {
            font-size: 2vw;
            }
    }
    @media(max-width: 600px) {
            background: #ffffff01;

        h1 {
            display:none;
        }
        .img {
            width:30%;
        }
    }
`
export const DivContentRigth = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    background: var(--gray-2);
    padding: 4%;
    border-radius:0 0.3vw  0.3vw 0;
    width:100%;
    height:100%;
    .divButton {
        display:flex;
        flex-direction:column;
        gap:1vw;
        width:70%;
    }
    .divTitle {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        width:90%;
    }
    h2 {
        font-weight: 600;
        font-size: 1.95vw;
        color: var(--gray-0);
        padding-bottom: 2%;
    }
    p {
        width:90%;
        font-weight: 600;
        font-size: 1.05vw;
        color: var(--gray-0);
    }
    .img {
        width:75%;
    }
    button {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.6vh;
        background: var(--color-primary);
        border: 0.1vw solid var(--color-primary);
        border-radius: 0.2vw;
        font-weight: 600;
        font-size: 1.05vw;
        color: var(--white);

        &:hover {
                background: var(--color-primary-focus);
                border: 0.1vw solid var(--color-primary-focus);  
        }
    }
    @media(max-width: 950px) {
        .img {
            width:100%;
        }
        h2 {
            font-size: 2vw;
        }
        p {
            font-size: 1.8vw;
        }
        button {
            height: 8vh;
            font-weight: 600;
            font-size: 2vw;
            border-radius: 0.5vw;
        }

    }
    @media(max-width: 600px) {
        padding: 6%;
        margin-top:45%;
        .img {
            width:60%;
        }
        h2 {
            font-size: 5vw;
        }
        p {
            font-size: 4.5vw;
            margin-top:1%;
        }
        button {
            height: 7.3vh;
            font-weight: 600;
            font-size: 4vw;
            border-radius: 1vw;
        }
    }
`