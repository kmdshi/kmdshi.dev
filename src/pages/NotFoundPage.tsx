function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0b0b0c",
        color: "#fff",
        textAlign: "center",
        fontFamily: "sans-serif",
        padding: "0 1rem", 
      }}
    >
      <h1
        style={{
          fontSize: "clamp(4rem, 15vw, 10rem)",
          margin: 0,
        }}
      >
        404 - Not found
      </h1>
      <h2
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2rem)",
          margin: "1rem 0",
        }}
      >
        Нет такой страницы чэл
      </h2>
      <a
        href="/"
        style={{
          padding: "0.8rem 2rem",
          color: "#fff",
          textDecoration: "underline",
          textUnderlineOffset: "2px", 
          borderRadius: "8px",
          fontWeight: "bold",
          transition: "0.2s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
      >
        Вернуться домой
      </a>
    </div>
  );
}

export default NotFoundPage;
