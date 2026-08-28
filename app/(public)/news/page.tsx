import { news } from "../_lib/data";

export default function NewsPage() {
  return (
    <div>
      <div className="border-b border-border bg-radial-glow">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-8">
          <h1 className="font-display text-3xl sm:text-4xl uppercase tracking-tight text-foreground mb-1">
            News
          </h1>
          <p className="text-muted-foreground">
            Announcements and stories from around the tournament.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {news.map((article) => (
            <article
              key={article.slug}
              className="hover-lift group bg-card border border-border rounded-xl overflow-hidden shadow-card"
            >
              <div
                className="h-36 border-b-2 relative overflow-hidden"
                style={{ backgroundColor: `${article.color}18`, borderColor: article.color }}
              >
                <div
                  className="absolute -right-8 -top-8 w-40 h-40 rounded-full blur-2xl opacity-40"
                  style={{ backgroundColor: article.color }}
                />
                <div
                  className="absolute -left-10 bottom-0 w-32 h-32 rounded-full blur-2xl opacity-20"
                  style={{ backgroundColor: article.color }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded ${
                      article.tag === "News" ? "bg-secondary/20 text-secondary" : "bg-accent/20 text-accent"
                    }`}
                  >
                    {article.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                </div>
                <h2 className="font-display text-xl uppercase tracking-wide text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
