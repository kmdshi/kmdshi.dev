import type { JSX } from "react";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Project = {
  icon: JSX.Element;
  title: string;
  desc: string;
  tags: string[];
  platforms: string[];
  repoUrl: string;
  
};

const platformIcons: Record<string, { icon: JSX.Element;  label: string }> = {
  iOS: {
    icon: <svg role="img" fill="white"  className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>,
    label: "iOS"
  },
  Android: {
    icon: <svg role="img" fill="white"  className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Android</title><path d="M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"/></svg>,
    label: "Android"
  },
  Web: {
    icon: <svg role="img" fill="white"  className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firefox</title><path d="M20.452 3.445a11.002 11.002 0 00-2.482-1.908C16.944.997 15.098.093 12.477.032c-.734-.017-1.457.03-2.174.144-.72.114-1.398.292-2.118.56-1.017.377-1.996.975-2.574 1.554.583-.349 1.476-.733 2.55-.992a10.083 10.083 0 013.729-.167c2.341.34 4.178 1.381 5.48 2.625a8.066 8.066 0 011.298 1.587c1.468 2.382 1.33 5.376.184 7.142-.85 1.312-2.67 2.544-4.37 2.53-.583-.023-1.438-.152-2.25-.566-2.629-1.343-3.021-4.688-1.118-6.306-.632-.136-1.82.13-2.646 1.363-.742 1.107-.7 2.816-.242 4.028a6.473 6.473 0 01-.59-1.895 7.695 7.695 0 01.416-3.845A8.212 8.212 0 019.45 5.399c.896-1.069 1.908-1.72 2.75-2.005-.54-.471-1.411-.738-2.421-.767C8.31 2.583 6.327 3.061 4.7 4.41a8.148 8.148 0 00-1.976 2.414c-.455.836-.691 1.659-.697 1.678.122-1.445.704-2.994 1.248-4.055-.79.413-1.827 1.668-2.41 3.042C.095 9.37-.2 11.608.14 13.989c.966 5.668 5.9 9.982 11.843 9.982C18.62 23.971 24 18.591 24 11.956a11.93 11.93 0 00-3.548-8.511z"/></svg>,
    label: "Web"
  },
  Telegram: {
    icon: <svg role="img" fill="white"  className="w-4 h-4"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
    label: "Telegram"
  }
};


const projects: Project[] = [
  {
    icon: <FaGithub className="text-white/80 text-2xl" />,
    title: "ChatSearcher",
    desc: "Бот для поиска и фильтрации Telegram-чатов по интересам.",
    tags: ["Telegram Bot", "FastAPI", "Python"],
    platforms: ['Telegram'],
    repoUrl: "https://github.com/you/chatsearcher",
  },
  {
    icon: <FaGithub className="text-white/80 text-2xl" />,
    title: "ETP Protocol",
    desc: "Собственный криптографический протокол и демо-мессенджер.",
    tags: ["Crypto", "Dart", "Flutter"],
    platforms: ['iOS', 'Android'],
    repoUrl: "https://github.com/you/etp",
  },
  {
    icon: <FaGithub className="text-white/80 text-2xl" />,
    title: "Screpagram",
    desc: "Сатира на соцсети: система благонадёжности, ИИ-модерация, кураторы.",
    tags: ["React", "Next.js", "Tailwind"],
    platforms: ['iOS', 'Android'],
    repoUrl: "https://github.com/you/screpagram",
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-white/80">
      {children}
    </span>
  );
}


function ProjectsTab() {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-1">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex-shrink-0">{p.icon}</div>
              <h3 className="text-lg font-bold text-white">{p.title}</h3>

              <div className="flex gap-1">
                {p.platforms?.map((plat) => {
                  const cfg = platformIcons[plat];
                  if (!cfg) return null;
                  return (
                    <div
                      key={plat}
                      title={cfg.label}
                      className="pr-2 flex items-center justify-center rounded-full cursor-default"
                    >
                      {React.cloneElement(cfg.icon, { className: "w-4 h-4" })}
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-sm text-zinc-300">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>

            <a
              href={p.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex self-start items-center gap-2 text-sm text-white/80 hover:text-white transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
        <h4 className="text-lg font-bold text-white mb-2">
          Хочешь увидеть больше проектов?
        </h4>
        <p className="text-zinc-400 text-sm mb-4">
          Все мои репозитории и экспериментальные наработки доступны на GitHub.
        </p>
        <a
          href="https://github.com/твой-ник"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white font-medium transition"
        >
          <FaGithub /> Мой GitHub
        </a>
      </div>
    </div>
  );
}


export default ProjectsTab;