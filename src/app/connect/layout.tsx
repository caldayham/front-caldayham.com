export default function ConnectLayout({children}: {children: React.ReactNode}) {
    return (
      <div className="pageContainer">
        <h1>Connect Layout</h1>
        {children}
      </div>
    )
  }