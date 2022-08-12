import styled from "styled-components";

export const Section = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100vh;
 background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(18%2c 18%2c 20%2c 1)'%3e%3c/rect%3e%3cg mask='url(%26quot%3b%23SvgjsMask1001%26quot%3b)'%3e%3cpath d='M362.5 246.5L391.5 217.5M304.5 246.5L333.5 217.5L362.5 217.5M333.5 246.5L362.5 275.5M217.5 246.5L246.5 275.5M-14.5 275.5L14.5 275.5L43.5 275.5L72.5 275.5L101.5 275.5L130.5 246.5L159.5 246.5L188.5 246.5L217.5 246.5L246.5 246.5L275.5 246.5L304.5 246.5L333.5 246.5L362.5 246.5L391.5 246.5L420.5 246.5L449.5 246.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M442.25 246.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM384.25 217.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM355.25 217.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM355.25 275.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM239.25 275.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M304.5 333.5L333.5 304.5L362.5 304.5L391.5 304.5L420.5 304.5L449.5 304.5L478.5 304.5M594.5 362.5L623.5 391.5M449.5 362.5L478.5 333.5L507.5 304.5L536.5 304.5L565.5 304.5M333.5 333.5L362.5 333.5L391.5 333.5L420.5 333.5L449.5 333.5M710.5 362.5L739.5 391.5L768.5 391.5L797.5 391.5L826.5 391.5M130.5 333.5L159.5 304.5M507.5 362.5L536.5 391.5L565.5 391.5L594.5 391.5L623.5 420.5L652.5 420.5M-14.5 304.5L14.5 304.5L43.5 304.5L72.5 304.5L101.5 333.5L130.5 333.5L159.5 333.5L188.5 333.5L217.5 333.5L246.5 333.5L275.5 333.5L304.5 333.5L333.5 333.5L362.5 362.5L391.5 362.5L420.5 362.5L449.5 362.5L478.5 362.5L507.5 362.5L536.5 362.5L565.5 362.5L594.5 362.5L623.5 362.5L652.5 362.5L681.5 362.5L710.5 362.5L739.5 362.5L768.5 362.5L797.5 362.5L826.5 362.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M819.25 362.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM471.25 304.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM616.25 391.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM558.25 304.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM442.25 333.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM819.25 391.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM152.25 304.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM645.25 420.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M391.5 188.5L420.5 188.5L449.5 188.5L478.5 188.5L507.5 188.5M217.5 217.5L246.5 217.5M507.5 217.5L536.5 246.5M275.5 188.5L304.5 217.5M-14.5 246.5L14.5 246.5L43.5 246.5L72.5 246.5L101.5 246.5L130.5 217.5L159.5 217.5L188.5 217.5L217.5 217.5L246.5 188.5L275.5 188.5L304.5 188.5L333.5 188.5L362.5 188.5L391.5 188.5L420.5 217.5L449.5 217.5L478.5 217.5L507.5 217.5L536.5 217.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M529.25 217.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM500.25 188.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM239.25 217.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM529.25 246.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM297.25 217.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M420.5 391.5L449.5 420.5L478.5 420.5L507.5 449.5L536.5 449.5M304.5 362.5L333.5 391.5M275.5 362.5L304.5 391.5M-14.5 333.5L14.5 333.5L43.5 333.5L72.5 333.5L101.5 362.5L130.5 362.5L159.5 362.5L188.5 362.5L217.5 362.5L246.5 362.5L275.5 362.5L304.5 362.5L333.5 362.5L362.5 391.5L391.5 391.5L420.5 391.5L449.5 391.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M442.25 391.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM529.25 449.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM326.25 391.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM297.25 391.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M536.5 159.5L565.5 159.5L594.5 188.5M623.5 130.5L652.5 159.5L681.5 159.5L710.5 159.5L739.5 159.5L768.5 159.5L797.5 159.5L826.5 159.5M594.5 130.5L623.5 159.5M-14.5 217.5L14.5 217.5L43.5 217.5L72.5 217.5L101.5 217.5L130.5 188.5L159.5 188.5L188.5 188.5L217.5 188.5L246.5 159.5L275.5 159.5L304.5 159.5L333.5 159.5L362.5 159.5L391.5 159.5L420.5 159.5L449.5 159.5L478.5 159.5L507.5 159.5L536.5 159.5L565.5 130.5L594.5 130.5L623.5 130.5L652.5 130.5L681.5 130.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M674.25 130.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM587.25 188.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM819.25 159.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM616.25 159.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M681.5 507.5L710.5 478.5L739.5 478.5M217.5 391.5L246.5 420.5L275.5 449.5L304.5 449.5L333.5 449.5L362.5 449.5L391.5 449.5M536.5 478.5L565.5 507.5L594.5 507.5L623.5 507.5M507.5 478.5L536.5 507.5M449.5 449.5L478.5 478.5M391.5 420.5L420.5 420.5M-14.5 362.5L14.5 362.5L43.5 362.5L72.5 362.5L101.5 391.5L130.5 391.5L159.5 391.5L188.5 391.5L217.5 391.5L246.5 391.5L275.5 420.5L304.5 420.5L333.5 420.5L362.5 420.5L391.5 420.5L420.5 449.5L449.5 449.5L478.5 449.5L507.5 478.5L536.5 478.5L565.5 478.5L594.5 478.5L623.5 478.5L652.5 478.5L681.5 507.5L710.5 507.5L739.5 507.5' stroke='rgba(255%2c 66%2c 127%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M732.25 507.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM732.25 478.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM384.25 449.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM616.25 507.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM529.25 507.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM471.25 478.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM413.25 420.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(255%2c 66%2c 127%2c 1)'%3e%3c/path%3e%3cpath d='M710.5 101.5L739.5 130.5L768.5 130.5L797.5 130.5M797.5 101.5L826.5 72.5M768.5 101.5L797.5 72.5M739.5 101.5L768.5 72.5M-14.5 188.5L14.5 188.5L43.5 188.5L72.5 188.5L101.5 188.5L130.5 159.5L159.5 159.5L188.5 159.5L217.5 159.5L246.5 130.5L275.5 130.5L304.5 130.5L333.5 130.5L362.5 130.5L391.5 130.5L420.5 130.5L449.5 130.5L478.5 130.5L507.5 130.5L536.5 130.5L565.5 101.5L594.5 101.5L623.5 101.5L652.5 101.5L681.5 101.5L710.5 101.5L739.5 101.5L768.5 101.5L797.5 101.5L826.5 101.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M819.25 101.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM790.25 130.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM819.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM790.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM761.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M130.5 420.5L159.5 449.5M43.5 391.5L72.5 420.5L101.5 449.5L130.5 449.5M-14.5 391.5L14.5 391.5L43.5 391.5L72.5 391.5L101.5 420.5L130.5 420.5L159.5 420.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M152.25 420.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM152.25 449.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM123.25 449.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3cpath d='M246.5 101.5L275.5 72.5L304.5 72.5L333.5 72.5M188.5 130.5L217.5 101.5M362.5 101.5L391.5 72.5L420.5 72.5L449.5 72.5L478.5 72.5M14.5 159.5L43.5 130.5L72.5 130.5L101.5 130.5M507.5 101.5L536.5 72.5M159.5 130.5L188.5 101.5L217.5 72.5L246.5 72.5M-14.5 159.5L14.5 159.5L43.5 159.5L72.5 159.5L101.5 159.5L130.5 130.5L159.5 130.5L188.5 130.5L217.5 130.5L246.5 101.5L275.5 101.5L304.5 101.5L333.5 101.5L362.5 101.5L391.5 101.5L420.5 101.5L449.5 101.5L478.5 101.5L507.5 101.5L536.5 101.5L565.5 72.5L594.5 72.5L623.5 72.5L652.5 72.5L681.5 72.5L710.5 72.5' stroke='rgba(151%2c 53%2c 85%2c 1)' stroke-width='4.83'%3e%3c/path%3e%3cpath d='M703.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM326.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM210.25 101.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM471.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM94.25 130.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM529.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0zM239.25 72.5 a7.25 7.25 0 1 0 14.5 0 a7.25 7.25 0 1 0 -14.5 0z' fill='rgba(151%2c 53%2c 85%2c 1)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cmask id='SvgjsMask1001'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3cpath d='M445.87 246.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM387.87 217.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM358.87 217.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM358.87 275.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM242.87 275.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M822.87 362.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM474.87 304.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM619.87 391.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM561.87 304.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM445.87 333.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM822.87 391.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM155.87 304.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM648.87 420.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M532.87 217.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM503.87 188.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM242.87 217.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM532.87 246.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM300.87 217.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M445.87 391.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM532.87 449.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM329.87 391.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM300.87 391.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M677.87 130.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM590.87 188.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM822.87 159.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM619.87 159.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M735.87 507.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM735.87 478.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM387.87 449.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM619.87 507.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM532.87 507.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM474.87 478.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM416.87 420.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M822.87 101.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM793.87 130.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM822.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM793.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM764.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M155.87 420.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM155.87 449.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM126.87 449.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3cpath d='M706.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM329.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM213.87 101.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM474.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM97.87 130.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM532.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0zM242.87 72.5 a3.63 3.63 0 1 0 7.26 0 a3.63 3.63 0 1 0 -7.26 0z' fill='black'%3e%3c/path%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
`
export const Div = styled.div`
        width:100%;
        height:100%;
        display:flex;
        justify-content: space-between;
        margin: 2vh 0
`
export const Img = styled.img`
    width: 40%;
`
export const ButtonBlack = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 5.3vh;
    background: var(--gray-3);
    border-radius: 0.2vw;
    border:none;
    font-weight: 600;
    font-size: 0.8vw;
    text-align: center;
    color: var(--gray-0);

        &:hover {
                background: var(--gray-2);
                border: 0.1vw solid var(--gray-2);  
        }
        @media(max-width: 950px) {
                height: 6vh;
                font-size: 2vw;
                border-radius: 0.5vw;
        }
        @media(max-width: 600px) {
                font-size: 3vw;
                border-radius: 1.2vw;
        }
`
export const DivContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 25%;
    height: 85%;
    margin:3.5vw 0;
    gap: 2vw;
        @media(max-width: 950px) {
                width:60%;
                gap: 10vw;
                margin:10.5vw 0;
        }
        @media(max-width: 600px) {
                width:90%;
                gap: 10vw;
                margin:10.5vw 0;
        }
`
export const Title = styled.h1`
        font-weight: 700;
        font-size: 1.2vw;
        line-height: 2vw;
        color: var(--gray-0);
        text-align:center;
                
        @media(max-width: 950px) {
                font-size: 2.5vw;
                line-height: 3.5vw;
        }
        @media(max-width: 600px) {
                font-size: 5vw;
                line-height: 7vw;
        }
  `
export const Form = styled.form`
        width:100%;
        display: flex;
        flex-direction: column;
        padding: 11% 5.9%;
        gap: 1.8vw;
        background: var(--gray-3);
        box-shadow: 0px 4px 40px -10px var(--shadow);
        border-radius: 0.3vw; 
                
        @media(max-width: 950px) {
                gap: 3vw;
        }
        @media(max-width: 600px) {
                gap: 6.4vw;
        }
  `
export const Input = styled.input`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 4%;
        width: 100%;
        height: 6.5vh;
        background: var(--gray-2);
        border: none;
        border-radius: 4px;
        font-weight: 400;
        font-size: 1.05vw;
        color: var(--gray-0);

        &::placeholder {
            color: var(--gray-1);
        }
        
        @media(max-width: 950px) {
                border-radius: 0.5vw;
                font-size: 2vw;
                height: 8vh;
        }
        @media(max-width: 600px) {
                border-radius: 1.5vw;
                font-size: 4vw;
                height: 7vh;
        }
`
export const Label = styled.label`
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        height: 0;
        font-weight: 400;
        font-size: 0.8vw;
        color: var(--gray-0);
                
        span{
                font-weight: 400;
                font-size: 0.8vw;
                color: var(--negative);
        }
        @media(max-width: 950px) {
                font-size:1.5vw;
        span{
                font-weight: 400;
                font-size:1.5vw;
                color: var(--negative);
        }
        }
        @media(max-width: 600px) {
                font-size: 3vw;
        span{
                font-weight: 400;
                font-size: 3vw;
                color: var(--negative);
        }
        }
`
export const ParagraphQuestion = styled.p`
        width:100%;
        font-weight: 600;
        font-size: 0.8vw;
        line-height: 1.1vw;
        color: var(--gray-1);
        text-align:center;
        @media(max-width: 950px) {
                font-size: 1.5vw;
                line-height: 2vw;
        }
        @media(max-width: 600px) {
                font-size: 3vw;
                line-height: 4vw;
        }
`
export const Select = styled.select`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 4%;
        width: 100%;
        height: 6.5vh;
        background: var(--gray-2);
        border: none;
        border-radius: 4px;
        font-weight: 400;
        font-size: 1.05vw;
        color: var(--gray-1);

        &::placeholder {
            color: var(--gray-1);
        }
        @media(max-width: 950px) {
                border-radius: 0.5vw;
                font-size: 2vw;
                height: 8vh;
        }
        @media(max-width: 600px) {
                border-radius: 1.5vw;
                font-size: 4vw;
                height: 7vh;
        }
`
export const ButtonNegative = styled.button`
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 6.6vh;
        background: var(--color-primary-negative);
        border: 0.1vw solid  var(--color-primary-negative);
        border-radius: 0.2vw;
        font-weight: 500;
        font-size: 1.05vw;
        color: var(--white);

        &:hover {
                background: var(--color-primary-focus);
                border: 0.1vw solid var(--color-primary-focus);  
        }
         
        @media(max-width: 950px) {
                height: 8vh;
                font-weight: 600;
                font-size: 2vw;
                border-radius: 0.5vw;
        }
        @media(max-width: 600px) {
                font-weight: 600;
                font-size: 4vw;
                border-radius: 1vw;
        }
`