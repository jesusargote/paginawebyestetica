// src/components/ConsultationModal.jsx
import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const ConsultationModal = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    skinType: '',
    mainConcern: '',
    secondaryConcerns: [],
    budget: '',
    timeAvailability: '',
    previousTreatments: '',
    allergies: '',
    additionalInfo: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const { closeConsultationModal } = useApp();

  // Opciones predefinidas
  const skinTypes = ['Seca', 'Grasa', 'Mixta', 'Sensible', 'Normal', 'No estoy segura/o'];
  const mainConcerns = [
    'Acné y espinillas',
    'Manchas y hiperpigmentación',
    'Arrugas y líneas de expresión',
    'Poros dilatados',
    'Rosácea y enrojecimiento',
    'Piel opaca sin brillo',
    'Flacidez y pérdida de firmeza',
    'Cicatrices de acné',
    'Exceso de vello facial',
    'Otro'
  ];
  
  const secondaryOptions = [
    'Hidratación profunda',
    'Limpieza facial profunda',
    'Reducción de poros',
    'Unificación del tono',
    'Antienvejimiento',
    'Brillo y luminosidad',
    'Suavización de textura',
    'Reducción de rojez'
  ];

  const budgetOptions = [
    'Menos de $100.000',
    '$100.000 - $200.000',
    '$200.000 - $400.000',
    '$400.000 - $600.000',
    'Más de $600.000'
  ];

  const timeOptions = [
    'Mañanas (8am - 12pm)',
    'Tardes (2pm - 6pm)',
    'Fines de semana',
    'Flexible, me adapto'
  ];

  // Auto-cerrar modal de éxito
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        closeConsultationModal();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, closeConsultationModal]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => {
        const concerns = [...prev.secondaryConcerns];
        if (checked) {
          concerns.push(value);
        } else {
          const index = concerns.indexOf(value);
          if (index > -1) concerns.splice(index, 1);
        }
        return { ...prev, secondaryConcerns: concerns };
      });
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateStep = (step) => {
    switch(step) {
      case 1:
        if (!formData.name.trim()) {
          alert('Por favor ingresa tu nombre completo');
          return false;
        }
        if (!formData.phone || formData.phone.replace(/\D/g, '').length < 10) {
          alert('Por favor ingresa un número de teléfono válido (mínimo 10 dígitos)');
          return false;
        }
        return true;
      case 2:
        if (!formData.skinType) {
          alert('Por favor selecciona tu tipo de piel');
          return false;
        }
        if (!formData.mainConcern) {
          alert('Por favor selecciona tu principal preocupación');
          return false;
        }
        return true;
      case 3:
        if (!formData.budget) {
          alert('Por favor selecciona tu presupuesto estimado');
          return false;
        }
        if (!formData.timeAvailability) {
          alert('Por favor selecciona tu disponibilidad horaria');
          return false;
        }
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  };

  // Función para enviar a WhatsApp
  const sendConsultationToWhatsApp = () => {
    const phoneNumber = "573023313705";
    
    const message = `🟢 *SOLICITUD DE CONSULTA - ESTÉTICA FACIAL Y CORPORAL* 🟢

👤 *Información Personal:*
   • 📛 Nombre: ${formData.name}
   • 📞 Teléfono: ${formData.phone}

🔬 *Evaluación de la Piel:*
   • 🧴 Tipo de piel: ${formData.skinType}
   • 🎯 Preocupación principal: ${formData.mainConcern}
   • ✅ Objetivos secundarios: ${formData.secondaryConcerns.length > 0 ? formData.secondaryConcerns.join(', ') : 'Ninguno especificado'}
   • 💊 Tratamientos anteriores: ${formData.previousTreatments || 'Ninguno'}
   • ⚠️ Alergias conocidas: ${formData.allergies || 'Ninguna'}

💼 *Preferencias de Tratamiento:*
   • 💰 Presupuesto estimado: ${formData.budget}
   • ⏰ Disponibilidad horaria: ${formData.timeAvailability}

📝 *Información Adicional:*
${formData.additionalInfo ? `   • ${formData.additionalInfo}` : '   • Sin comentarios adicionales'}

——————————————
📋 *Estado:* 🟡 CONSULTA PENDIENTE DE ASESORÍA
——————————————

_Formulario de consulta generado automáticamente desde la web_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  // Función para manejar el envío final
  const handleFinalSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSending(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      sendConsultationToWhatsApp();
      setShowSuccess(true);
    } catch (error) {
      console.error('Error al enviar la consulta:', error);
      alert('Hubo un error al enviar tu consulta. Por favor intenta nuevamente.');
    } finally {
      setIsSending(false);
    }
  };

  // Manejar la tecla Enter en los inputs
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (currentStep < 4) {
        nextStep();
      }
    }
  };

  // Pantalla de éxito
  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-spa p-8 max-w-md mx-4 text-center">
          <div className="animate-bounce mb-4">
            <span className="text-6xl">✅</span>
          </div>
          <h3 className="text-2xl font-playfair font-bold text-spa-green mb-2">
            ¡Consulta Enviada!
          </h3>
          <p className="text-spa-dark mb-4">
            Hemos recibido tu información. Te contactaremos por WhatsApp en los próximos minutos.
          </p>
          <div className="bg-spa-beige p-3 rounded-spa animate-pulse">
            <p className="text-sm text-spa-dark">
              Cerrando automáticamente en 3 segundos...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-spa shadow-spa p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-playfair font-bold text-spa-dark">Solicitar Consulta Personalizada</h2>
          <button 
            onClick={closeConsultationModal}
            className="text-spa-dark hover:text-spa-gold text-2xl"
          >
            ×
          </button>
        </div>

        {/* Indicador de progreso */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm text-spa-dark">Paso {currentStep} de 4</span>
            <span className="text-sm text-spa-gold">{Math.round((currentStep / 4) * 100)}% completado</span>
          </div>
          <div className="w-full bg-spa-beige rounded-full h-2">
            <div 
              className="bg-spa-gold h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* CONTENIDO DEL FORMULARIO SIN <form> */}
        <div>
          {/* Paso 1: Información básica */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="text-lg font-playfair font-semibold text-spa-gold mb-4">
                👤 Información de Contacto
              </h3>
              
              <div>
                <label className="block text-sm font-medium text-spa-dark mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent"
                  placeholder="Ingresa tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-2">
                  Número de teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold focus:border-transparent"
                  placeholder="3023313705"
                />
              </div>
            </div>
          )}

          {/* Paso 2: Tipo de piel y preocupaciones */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-lg font-playfair font-semibold text-spa-gold mb-4">
                🔬 Evaluación de tu Piel
              </h3>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-3">
                  ¿Cuál es tu tipo de piel? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {skinTypes.map(type => (
                    <label key={type} className="flex items-center p-3 border border-spa-beige rounded-spa cursor-pointer hover:bg-spa-beige/50">
                      <input
                        type="radio"
                        name="skinType"
                        value={type}
                        checked={formData.skinType === type}
                        onChange={handleChange}
                        className="mr-2 text-spa-gold"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-3">
                  ¿Cuál es tu principal preocupación? *
                </label>
                <select
                  name="mainConcern"
                  value={formData.mainConcern}
                  onChange={handleChange}
                  className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold"
                >
                  <option value="">Selecciona tu principal preocupación</option>
                  {mainConcerns.map(concern => (
                    <option key={concern} value={concern}>{concern}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-3">
                  ¿Qué otros objetivos te gustaría lograr? (Puedes seleccionar varios)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {secondaryOptions.map(option => (
                    <label key={option} className="flex items-center p-2 border border-spa-beige rounded-spa cursor-pointer hover:bg-spa-beige/30">
                      <input
                        type="checkbox"
                        name="secondaryConcerns"
                        value={option}
                        checked={formData.secondaryConcerns.includes(option)}
                        onChange={handleChange}
                        className="mr-2 text-spa-gold"
                      />
                      <span className="text-xs">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Paso 3: Presupuesto y disponibilidad */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-lg font-playfair font-semibold text-spa-gold mb-4">
                💼 Preferencias de Tratamiento
              </h3>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-3">
                  ¿Cuál es tu presupuesto estimado para el tratamiento? *
                </label>
                <div className="space-y-2">
                  {budgetOptions.map(option => (
                    <label key={option} className="flex items-center p-3 border border-spa-beige rounded-spa cursor-pointer hover:bg-spa-beige/50">
                      <input
                        type="radio"
                        name="budget"
                        value={option}
                        checked={formData.budget === option}
                        onChange={handleChange}
                        className="mr-2 text-spa-gold"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-3">
                  ¿Qué horario prefieres para tu consulta? *
                </label>
                <div className="space-y-2">
                  {timeOptions.map(option => (
                    <label key={option} className="flex items-center p-3 border border-spa-beige rounded-spa cursor-pointer hover:bg-spa-beige/50">
                      <input
                        type="radio"
                        name="timeAvailability"
                        value={option}
                        checked={formData.timeAvailability === option}
                        onChange={handleChange}
                        className="mr-2 text-spa-gold"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Paso 4: Información adicional */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <h3 className="text-lg font-playfair font-semibold text-spa-gold mb-4">
                📝 Información Adicional
              </h3>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-2">
                  ¿Has recibido tratamientos faciales anteriormente?
                </label>
                <textarea
                  name="previousTreatments"
                  value={formData.previousTreatments}
                  onChange={handleChange}
                  rows={2}
                  className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold"
                  placeholder="Ej: Limpiezas faciales, peelings, láser, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-2">
                  Alergias conocidas o condiciones médicas relevantes
                </label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  rows={2}
                  className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold"
                  placeholder="Ej: Alergia a componentes específicos, condiciones de la piel, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-spa-dark mb-2">
                  ¿Alguna información adicional que quieras compartir?
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full p-3 border border-spa-green bg-spa-beige text-spa-dark rounded-spa focus:ring-2 focus:ring-spa-gold"
                  placeholder="Cualquier detalle que consideres importante para tu asesoría..."
                />
              </div>
            </div>
          )}

          {/* Botones de navegación */}
          <div className="flex justify-between mt-8 pt-4 border-t border-spa-beige">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-spa-beige text-spa-dark py-2 px-6 rounded-spa hover:bg-spa-beige/70 transition"
                >
                  ← Anterior
                </button>
              )}
            </div>

            <div>
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-spa-gold text-white py-2 px-6 rounded-spa hover:bg-spa-dark transition"
                >
                  Siguiente →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  disabled={isSending}
                  className={`bg-spa-green text-white py-2 px-6 rounded-spa transition flex items-center gap-2 ${
                    isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'
                  }`}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    '📱 Confirmar y enviar por WhatsApp'
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationModal;