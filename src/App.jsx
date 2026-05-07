import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="text-center pt-16 pb-12">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          🔒 Protección de Datos
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Guía completa para proteger tu información en el mundo digital
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        
        {/* Row 1: Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <div className="text-4xl font-bold mb-2">4.3B</div>
            <p className="text-gray-100">Registros de datos expuestos en 2024</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <div className="text-4xl font-bold mb-2">95%</div>
            <p className="text-gray-100">De brechas causadas por contraseñas débiles</p>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <div className="text-4xl font-bold mb-2">$5M</div>
            <p className="text-gray-100">Costo promedio de una violación de datos</p>
          </div>
        </div>

        {/* Row 2: Key Threats */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">⚠️ Amenazas Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-700 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="text-xl font-bold mb-3 text-orange-300">Phishing</h3>
              <p className="text-gray-300">Emails engañosos que te piden información personal. Verifica siempre el remitente.</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold mb-3 text-red-300">Malware</h3>
              <p className="text-gray-300">Software malicioso que infecta tu dispositivo. Usa antivirus actualizado.</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 border-l-4 border-pink-500">
              <h3 className="text-xl font-bold mb-3 text-pink-300">Robo de Identidad</h3>
              <p className="text-gray-300">Uso no autorizado de tus datos personales. Monitorea tus cuentas regularmente.</p>
            </div>
            <div className="bg-slate-700 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold mb-3 text-green-300">WiFi Público Inseguro</h3>
              <p className="text-gray-300">Redes públicas sin protección. Usa VPN para conectarte de forma segura.</p>
            </div>
          </div>
        </div>

        {/* Row 3: Best Practices */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-300">✅ Mejores Prácticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-bold mb-2">Contraseñas Fuertes</h3>
              <p className="text-sm text-gray-100">Mínimo 12 caracteres, mixtos y símbolos</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold mb-2">Autenticación 2FA</h3>
              <p className="text-sm text-gray-100">Añade una capa extra de seguridad</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-3">🔄</div>
              <h3 className="font-bold mb-2">Actualiza Software</h3>
              <p className="text-sm text-gray-100">Mantén sistemas y apps actualizados</p>
            </div>
            <div className="bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-lg p-6 shadow-lg">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold mb-2">Gestor de Contraseñas</h3>
              <p className="text-sm text-gray-100">Almacena contraseñas de forma segura</p>
            </div>
          </div>
        </div>

        {/* Row 4: Protection Checklist */}
        <div className="mb-12 bg-slate-700 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-yellow-300">📋 Checklist de Protección</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              '✓ No compartas información personal en redes sociales públicamente',
              '✓ Verifica URLs antes de hacer clic en enlaces',
              '✓ Realiza copias de seguridad de datos importantes',
              '✓ Usa VPN en redes públicas',
              '✓ Revisa permisos de aplicaciones',
              '✓ Configura privacidad en redes sociales',
              '✓ No abras archivos de remitentes desconocidos',
              '✓ Monitorea tu cuenta bancaria regularmente'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center text-gray-200">
                <span className="text-green-400 mr-3 text-lg">{item.substring(0, 1)}</span>
                <span>{item.substring(2)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-3">Tu Privacidad es Importante</h3>
          <p className="text-gray-100 mb-4">Sé proactivo en la protección de tus datos personales</p>
          <p className="text-sm text-gray-200">Última actualización: Mayo 2026</p>
        </div>
      </div>
    </div>
  )
}

export default App
