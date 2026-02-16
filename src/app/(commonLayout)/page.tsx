import Head from "next/head";

export default async function Home() {
  return (
    <>
      <Head>
        <title>AI-Powered Healthcare - Find Your Perfect Doctor</title>
        <meta
          name="description"
          content="Discover top-rated doctors tailored to your needs with our AI-powered healthcare platform. Get personalized recommendations and book appointments effortlessly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer | TypeScript Enthusiast
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
              View My Work
            </button>
          </div>
        </section>

        {/* About Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <p className="text-gray-300 text-lg">Your about content here...</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Card Example */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-3">
                Project Name
              </h3>
              <p className="text-gray-400 mb-4">Project description...</p>
              <div className="flex gap-2">
                <span className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full">
                  TypeScript
                </span>
                <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
