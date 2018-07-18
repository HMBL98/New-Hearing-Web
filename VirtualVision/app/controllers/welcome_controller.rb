class WelcomeController < ApplicationController
  def index
  	@frases = [
  		"La raza humana necesita un desafío intelectual. Debe ser aburrido ser Dios, y no tener nada que descubrir.",
  		"Reunirse es un comienzo, permanecer juntos es el progreso y trabajar juntos es el éxito",
  		"Hay una fuerza motriz más poderosa que el vapor, la electricidad y la energía atómica: la voluntad.",
  		"Limitar nuestra atención a cuestiones terrestres sería limitar el espíritu humano.",
  		"El fracaso es simplemente la oportunidad para comenzar de nuevo, en esta ocasión con más inteligencia",
  		"Tanto si piensas que puedes como si piensas que no, tienes razón",
  		"La vida es muy peligrosa. No por las personas que hacen el mal, sino por las que se sientan a ver lo que pasa.",
  		"Debemos intentar comprender el comienzo del Universo a partir de bases científicas. Puede que sea una tarea más allá de nuestras capacidades, pero al menos deberíamos intentarlo."
  	]

  end

  def about_us
    render :layout => "application"
  end
  def avisoprivacidad
    render :layout => "application"
  end
end
