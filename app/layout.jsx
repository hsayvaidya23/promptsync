import '@styles/globals.css';

export const metadata = {
    title: "PromptSync",
    description: 'A prompt synchronization tool for Developers',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <div className="main">
                <div className='gradient' />
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;