module.exports = {
  _: {
    storage_is_encrypted:
      'O armazenamento está encriptado. Uma password é necessaria para desencriptar',
    enter_password: 'Inserir password',
    bad_password: 'pasword errada, tente novamente',
  },
  wallets: {
    list: {
      tabBarLabel: 'Wallets',
      app_name: 'Blue Wallet',
      title: 'Minhas Bitcoin Wallets',
      header:
        'Uma wallet representa um par entre um segredo (chave privada) e um endereço' +
        'que pode partilhar para receber Bitcoin.',
      add: 'Adicionar Wallet',
    },
    add: {
      title: 'Adicionar Wallet',
      description:
        'Pode fazer um scan de um backup de uma wallet em papel (em WIF - Wallet Import Format), ou criar uma nova wallet. Segwit suportado por defeito.',
      scan: 'Scan',
      create: 'Criar',
      label_new_segwit: 'Novo SegWit',
    },
    details: {
      title: 'Detalhes da Wallet',
      address: 'Endereço',
      type: 'Tipo',
      label: 'Etiqueta',
      are_you_sure: 'Tem a certeza?',
      yes_delete: 'Sim, eliminar',
      no_cancel: 'Não, cancelar',
      delete_this_wallet: 'Apagar esta wallet',
      export_backup: 'Exportar / backup',
    },
    export: {
      title: 'Exportar Wallet',
    },
    scanQrWif: {
      go_back: 'Voltar',
      cancel: 'Cancelar',
      decoding: 'Descodificar',
      input_password: 'Inserir password',
      password_explain: 'Isto é um BIP38 chave privada encriptada',
      bad_password: 'Password errada',
      wallet_already_exists: 'Esta wallet já existe',
      bad_wif: 'WIF errado',
      imported_wif: 'WIF transferido ',
      with_address: ' com endereço ',
      imported_segwit: 'SegWit transferido',
      imported_legacy: 'Legacy transferido',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacções',
      title: 'Minhas Transacções',
      description:
        'Uma lista de transações feitas ou recebidas nas suas wallets',
      conf: 'conf',
    },
    details: {
      title: 'Detalhes da transacção',
      from: 'De',
      to: 'Para',
    },
  },
  send: {
    list: {
      tabBarLabel: 'Enviar',
      header: 'Enviar',
    },
    details: {
      title: 'Criar Transacção',
      amount_fiels_is_not_valid: 'Campo de quantia não é válido',
      fee_fiels_is_not_valid: 'Campo de taxa não é válido',
      address_fiels_is_not_valid: 'Campo de endereço não é válido',
      receiver_placeholder: 'endereço de envio aqui',
      amount_placeholder: 'quantia a enviar (em BTC)',
      fee_placeholder: 'mais a taxa de transacção (em BTC)',
      memo_placeholder: 'Nota pessoal',
      cancel: 'Cancelar',
      scan: 'Scan',
      create: 'Criar',
      remaining_balance: 'Saldo restante',
    },
    create: {
      title: 'Criar Transacção',
      error: 'Erro ao criar transacção. Endereço inválido ou quantia?',
      go_back: 'Voltar',
      this_is_hex:
        'Este é o hex da transacção, assinado e pronto para ser difundido para a network. Continuar?',
      to: 'Para',
      amount: 'Quantia',
      fee: 'Taxa',
      tx_size: 'Tamanho TX',
      satoshi_per_byte: 'satoshiPerByte',
      memo: 'Nota pessoal',
      broadcast: 'Difundir',
    },
  },
  receive: {
    list: {
      tabBarLabel: 'Receber',
      header: 'Receber',
    },
    details: {
      title: 'Partilhar este endereço com o pagador',
    },
  },
  settings: {
    tabBarLabel: 'Definições',
    header: 'Definições',
    plausible_deniability: 'Negação plausível...',
    storage_not_encrypted: 'Armazenamento: não encriptado',
    storage_encrypted: 'Armazenamento: encriptado',
    password: 'Password',
    password_explain: 'Definir a password para desencriptar o armazenamento',
    retype_password: 'Inserir password novamente',
    passwords_do_not_match: 'Passwords não coincidem',
    encrypt_storage: 'Encriptar armazenamento',
    about: 'Sobre',
  },
  plausibledeniability: {
    title: 'Negação plausível',
    help:
      'Em algumas circunstâncias, pode ser forçado a relevar uma ' +
      'password. Para manter as suas moedas seguras, A BlueWallet pode criar outro ' +
      'armazenamento encriptado, com uma password diferente. Sobre pressão, ' +
      'pode revelar esta password a um terceiro. Se inserida na ' +
      'BlueWallet, esta vai abrir um armazenamento "falso". Que vai parecer ' +
      'legítimo a um terceiro, mas que secretamente vai manter o seu armazenamento principal ' +
      'com as moedas em segurança.',
    help2:
      'Este novo armazenamento é completamente funcional, e pode guardar ' +
      'um valor minímo para parecer mais real.',
    create_fake_storage: 'Criar armazenamento encriptado FALSO',
    go_back: 'Voltar',
    create_password: 'Criar password',
    create_password_explanation:
      'Password para armazenamento FALSO não deve coincidir com o principal',
    password_should_not_match:
      'Password para armazenamento FALSO não deve coincidir com o principal',
    retype_password: 'Inserir password novamente',
    passwords_do_not_match: 'Passwords não coincidem, tente novamente',
    success: 'Sucesso',
  },
};
