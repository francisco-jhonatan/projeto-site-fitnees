# projeto-site-fitnees

curl --request POST \
  --url http://localhost:3333/api/personals \
  --header 'Content-Type: multipart/form-data' \
  --header 'User-Agent: insomnia/11.3.0' \
  --form 'nome=Antônio' \
  --form 'foto=@C:\Users\renat\Downloads\toim.jpeg' \
  --form 'descricao=Focado em treinamento funcional e bem-estar. Acredito que o movimento é a chave para uma vida saudável e equilibrada. Vamos juntos alcançar seus objetivos!' \
  --form genero=Masculino \
  --form 'formacao=Bacharel em Educação Física - UFPI, Pós-graduado em Fisiologia do Exercício' \
  --form 'experiencia=Mais de 8 anos atuando em academias de renome em Piripiri e com atendimento particular.' \
  --form 'formaDeAtendimento=Online,Presencial' \
  --form 'horarioDeAtendimento=Seg a Sáb - 07h às 20h' \
  --form 'contato={  "email": "toim@example.com",  "telefone": "86999887766",  "instagram": "@toim"}'

  curl --request GET \
  --url http://localhost:3333/api/personals \
  --header 'User-Agent: insomnia/11.3.0'

  curl --request GET \
  --url 'http://localhost:3333/api/personals?param=0' \
  --header 'User-Agent: insomnia/11.3.0'

  curl --request GET \
  --url 'http://localhost:3333/api/personals/search?nome=Zidane' \
  --header 'User-Agent: insomnia/11.3.0'