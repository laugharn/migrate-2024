import Auth from './auth'
function Footer() {
  return (
    <footer>
      &copy;{new Date().getFullYear()}, all rights reserved. <Auth />
    </footer>
  )
}
export default Footer
