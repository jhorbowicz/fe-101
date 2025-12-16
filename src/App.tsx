import { UserDetails } from './components/UserDetails.tsx'
import { UserList } from './components/UserList.tsx'

export function App() {

  return (
    <>
      <header id="page-header">
        {/* Page title goes here */} 👋
      </header>
      <main id="page-content">
        <UserDetails />
        <UserList />
      </main>
      <footer id="page-footer"> 
        {/* Page footer goes here */}  🐐
      </footer>
    </>
  )
}
