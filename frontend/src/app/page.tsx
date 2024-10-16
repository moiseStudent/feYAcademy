export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-8">
                <section className="text-center mb-8">
                    <h2 className="text-4xl text-black font-bold mb-4">
                        Bienvenidos a Nuestra Escuela Fe y Alegria: Luisa
                        Caceres de Arismendi.
                    </h2>
                    <p className="text-lg text-black">
                        Proveemos una educación de calidad para preparar a
                        nuestros estudiantes para el futuro.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">
                            Actualizaciones de Noticias
                        </h3>
                        <p className="text-gray-700">
                            Mantente al día con las últimas noticias y anuncios
                            importantes de la escuela.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">
                            Seguimiento de Calificaciones
                        </h3>
                        <p className="text-gray-700">
                            Revisa tus calificaciones y el progreso académico en
                            cualquier momento.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">
                            Gestión de Cuentas
                        </h3>
                        <p className="text-gray-700">
                            Administra tu perfil, actualiza información personal
                            y mucho más.
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4">
                            Eventos Escolares
                        </h3>
                        <p className="text-gray-700">
                            No te pierdas los eventos y actividades escolares
                            más importantes.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
