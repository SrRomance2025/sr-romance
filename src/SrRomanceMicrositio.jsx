export default function SrRomanceMicrositio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#6e0f1e] to-[#2c2c2c] text-white p-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-[#c0c0c0] mb-4">José Ríos Lugo – Sr. Romance</h1>
        <p className="text-xl italic">"Con cada una de mis canciones quiero seducir tu corazón y acariciar tu alma"</p>
      </header>

      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-[#c0c0c0] mb-2">Sobre Mí</h2>
          <p className="text-lg leading-relaxed">
            Soy poeta, letrista y un romántico empedernido. No canto ni compongo música, pero escribo canciones con el alma. Gracias a la inteligencia artificial, he podido transformar más de 100 letras inéditas en canciones, dándoles una voz y una vida que antes no tenían. Mi mayor anhelo es que cantantes y bandas las interpreten y las hagan suyas.
          </p>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <iframe className="w-full h-64" src="https://open.spotify.com/embed/album/0QDfUXG1xFq1cbmK7EF6UN" title="Álbum Salvar el Amor" allow="encrypted-media"></iframe>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-[#c0c0c0] mb-2">Conóceme Más</h2>
          <p className="text-lg leading-relaxed">
            Detrás de cada letra hay una historia, una emoción. Soy José Ríos Lugo, pero muchos me llaman Sr. Romance. Aquí comparto no solo mis canciones, sino también mi esencia.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/jose-rios-lugo.jpeg" alt="José Ríos Lugo" className="rounded-2xl shadow-xl max-w-xs w-full object-cover" />
        </div>
      </section>

      <section className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#c0c0c0] mb-2">Mi Versión Digital</h2>
        <img src="/jose-ai-3.png" alt="Retrato AI José" className="mx-auto rounded-2xl shadow-lg max-w-xs" />
        <p className="text-lg mt-4">Una imagen creada por inteligencia artificial, que representa la visión artística detrás del Sr. Romance.</p>
      </section>

      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#c0c0c0] mb-4">Descubre mi Álbum</h2>
        <p className="mb-4 text-lg">“Salvar el Amor” contiene 15 canciones creadas a partir de mis letras, gracias al poder creativo de la inteligencia artificial. Disponible en todas las plataformas.</p>
        <a href="https://open.spotify.com/album/0QDfUXG1xFq1cbmK7EF6UN" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#c0c0c0] text-[#6e0f1e] font-bold py-2 px-6 rounded-full hover:bg-white">Escúchalo Ahora</a>
      </section>

      <section className="mt-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#c0c0c0] mb-4">¿Eres Cantante?</h2>
        <p className="mb-4 text-lg">Estoy en busca de voces reales que deseen interpretar mis letras. Si alguna de mis canciones te habla, te invito a hacerla tuya. Pongo mi catálogo y mi pluma a tu disposición.</p>
        <a href="mailto:contacto@srromance.com" className="inline-block bg-[#c0c0c0] text-[#6e0f1e] font-bold py-2 px-6 rounded-full hover:bg-white">Contáctame</a>
      </section>

      <section className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#c0c0c0] mb-4 text-center">Escríbeme</h2>
        <form action="https://formsubmit.co/contacto@srromance.com" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Tu nombre" required className="w-full p-3 rounded bg-white text-black" />
          <input type="email" name="email" placeholder="Tu correo electrónico" required className="w-full p-3 rounded bg-white text-black" />
          <textarea name="message" rows="5" placeholder="Tu mensaje" required className="w-full p-3 rounded bg-white text-black"></textarea>
          <button type="submit" className="bg-[#c0c0c0] text-[#6e0f1e] font-bold py-2 px-6 rounded-full hover:bg-white">Enviar</button>
        </form>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-[#c0c0c0] mb-4">Sígueme en Redes</h2>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://instagram.com/srromance" target="_blank" rel="noopener noreferrer" className="hover:text-[#c0c0c0]">📸</a>
          <a href="https://youtube.com/@srromance" target="_blank" rel="noopener noreferrer" className="hover:text-[#c0c0c0]">📺</a>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-[#c0c0c0]">
        © {new Date().getFullYear()} José Ríos Lugo – Sr. Romance. Todos los derechos reservados.
      </footer>
    </div>
  );
}
