const objetoA: {
    readonly chaveA: string; // dessa forma não podemos alterar o valor da chave posteriormente.
    chaveB: string;
    chaveC?: string; // chave opcional
    [key: string]: unknown; // Assinaturas de índice: A ideia das assinaturas de índice é digitar objetos de estrutura desconhecida quando você conhece apenas os tipos de chave e valor.
  } = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
  };

  objetoA.chaveB = 'Outro valor';
  objetoA.chaveC = 'Novo valor';
  objetoA.chaveD = 'Nova chave'; // posso criar isso, pois criamos a assinatura de indice  `[key: string]: unknown`

  console.log(objetoA);
