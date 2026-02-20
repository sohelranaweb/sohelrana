const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-20" id="projects">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card Example */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-colors">
          <h3 className="text-2xl font-bold text-white mb-3">Project Name</h3>
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
  );
};

export default Projects;
