export default function App() {
  return (
    <div className="container py-5">
      <h1 className="display-6 mb-3">React + Bootstrap PWA</h1>
      <p className="lead">Deployed on GitHub Pages. Install me!</p>
      <a className="btn btn-primary" href="#">Primary Button</a>
      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5 className="card-title">Next steps</h5>
          <ol className="mb-0">
            <li>Paste Progressier manifest and script into <code>index.html</code></li>
            <li>Commit to GitHub → Pages redeploys</li>
            <li>Check DevTools → Application → Manifest & Service Workers</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
