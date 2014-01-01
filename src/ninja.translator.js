ninja.translator = {
	currentCulture: "en",

	translate: function (culture) {
		var dict = ninja.translator.translations[culture];
		if (dict) {
			// set current culture
			ninja.translator.currentCulture = culture;
			// update menu UI
			for (var cult in ninja.translator.translations) {
				document.getElementById("culture" + cult).setAttribute("class", "");
			}
			document.getElementById("culture" + culture).setAttribute("class", "selected");
			// apply translations
			for (var id in dict) {
				if (document.getElementById(id) && document.getElementById(id).value) {
					document.getElementById(id).value = dict[id];
				}
				else if (document.getElementById(id)) {
					document.getElementById(id).innerHTML = dict[id];
				}
			}
		}
	},

	get: function (id) {
		var translation = ninja.translator.translations[ninja.translator.currentCulture][id];
		return translation;
	},

	translations: {
		"en": {
			// javascript alerts or messages
			"testneteditionactivated": "TESTNET EDITION ACTIVATED",
			"paperlabelbitcoinaddress": "Litecoin Address:",
			"paperlabelprivatekey": "Private Key (Wallet Import Format):",
			"paperlabelencryptedkey": "Encrypted Private Key (Password required)",
			"bulkgeneratingaddresses": "Generating addresses... ",
			"brainalertpassphrasetooshort": "The passphrase you entered is too short.\n\n",
			"brainalertpassphrasewarning": "Warning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your litecoins.",
			"brainalertpassphrasedoesnotmatch": "The passphrase does not match the confirm passphrase.",
			"detailalertnotvalidprivatekey": "The text you entered is not a valid Private Key",
			"detailconfirmsha256": "The text you entered is not a valid Private Key!\n\nWould you like to use the entered text as a passphrase and create a Private Key using a SHA256 hash of the passphrase?\n\nWarning: Choosing a strong passphrase is important to avoid brute force attempts to guess your passphrase and steal your litecoins.",
			"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.",
			"bip38alertpassphraserequired": "Passphrase required for BIP38 key",
			"vanityinvalidinputcouldnotcombinekeys": "Invalid input. Could not combine keys.",
			"vanityalertinvalidinputpublickeysmatch": "Invalid input. The Public Key of both entries match. You must input two different keys.",
			"vanityalertinvalidinputcannotmultiple": "Invalid input. Cannot multiply two public keys. Select 'Add' to add two public keys to get a litecoin address.",
			"vanityprivatekeyonlyavailable": "Only available when combining two private keys",
			"vanityalertinvalidinputprivatekeysmatch": "Invalid input. The Private Key of both entries match. You must input two different keys."
		},

		"es": {
			// javascript alerts or messages
			"testneteditionactivated": "Testnet se activa",
			"paperlabelbitcoinaddress": "Dirección Litecoin:",
			"paperlabelprivatekey": "Clave privada (formato para importar):",
			"paperlabelencryptedkey": "Clave privada cifrada (contraseña necesaria)",
			"bulkgeneratingaddresses": "Generación de direcciones... ",
			"brainalertpassphrasetooshort": "La contraseña introducida es demasiado corta.\n\n",
			"brainalertpassphrasewarning": "Aviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus litecoins.",
			"brainalertpassphrasedoesnotmatch": "Las contraseñas no coinciden.",
			"detailalertnotvalidprivatekey": "El texto que has introducido no es una clave privada válida",
			"detailconfirmsha256": "El texto que has introducido no es una clave privada válida\n\n¿Quieres usar ese texto como si fuera una contraseña y generar una clave privada usando un hash SHA256 de tal contraseña?\n\nAviso: Es importante escoger una contraseña fuerte para evitar ataques de fuerza bruta a fin de adivinarla y robar tus litecoins.",
			"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
			"bip38alertpassphraserequired": "Passphrase required for BIP38 key", //TODO: please translate
			"vanityinvalidinputcouldnotcombinekeys": "Entrada no válida. No se puede combinar llaves.",
			"vanityalertinvalidinputpublickeysmatch": "Entrada no válida. La clave pública de ambos coincidan entradas. Debe introducir dos claves diferentes.",
			"vanityalertinvalidinputcannotmultiple": "Entrada no válida. No se puede multiplicar dos claves públicas. Seleccione 'Añadir' para agregar dos claves públicas para obtener una dirección litecoin.",
			"vanityprivatekeyonlyavailable": "Sólo está disponible cuando se combinan dos claves privadas",
			"vanityalertinvalidinputprivatekeysmatch": "Entrada no válida. La clave privada de ambos coincidan entradas. Debe introducir dos claves diferentes.",

			// header and menu html
			"tagline": "Generador de carteras Litecoin de código abierto en lado de cliente con Javascript",
			"generatelabelbitcoinaddress": "Generando dirección Litecoin...",
			"generatelabelmovemouse": "Mueve un poco el ratón para crear entropía...",
			"singlewallet": "Una sola cartera",
			"paperwallet": "Cartera en papel",
			"bulkwallet": "Direcciones en masa",
			"brainwallet": "Cartera mental",
			"vanitywallet": "Cartera personalizada",
			"detailwallet": "Detalles de la cartera",

			// footer html
			"footerlabeldonations": "Donaciones:",
			"footerlabeltranslatedby": "Traducción: <b>12345</b>Vypv2QSmuRXcciT5oEB27mPbWGeva",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Histórico de versiones",
			"footerlabelgithub": "Repositorio GitHub",
			"footerlabelcopyright1": "Copyright bitaddress.org.",
			"footerlabelcopyright2": "Copyright del código JavaScript: en el fuente.",
			"footerlabelnowarranty": "Sin garantía.",

			// single wallet html
			"newaddress": "Generar dirección",
			"singleprint": "Imprimir",
			"singlelabelbitcoinaddress": "Dirección Litecoin",
			"singlelabelprivatekey": "Clave privada (formato para importar):",
			"singletip1": "<b>A Litecoin wallet</b> is as simple as a single pairing of a Litecoin address with it's corresponding Litecoin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
			"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the Litecoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA1 hash of this HTML with the SHA1 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Litecoin private key should be kept a secret. Whomever you share the private key with has access to spend all the litecoins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
			"singletip3": "<b>Add funds</b> to this wallet by instructing others to send litecoins to your Litecoin address.", //TODO: please translate
			"singletip4": "<b>Check your balance</b> by going to explorer.litecoin.net or block-explorer.com and entering your Litecoin address.", //TODO: please translate
			"singletip5": "<b>Spend your litecoins</b> by downloading one of the popular litecoin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a litecoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another litecoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining litecoins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Ocultar diseño",
			"paperlabeladdressesperpage": "Direcciones por página:",
			"paperlabeladdressestogenerate": "Direcciones en total:",
			"papergenerate": "Generar",
			"paperprint": "Imprimir",
			"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
			"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

			// bulk wallet html
			"bulklabelstartindex": "Empezar en:",
			"bulklabelrowstogenerate": "Filas a generar:",
			"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
			"bulkgenerate": "Generar",
			"bulkprint": "Imprimir",
			"bulklabelcsv": "Valores separados por coma:",
			"bulklabelformat": "Índice,Dirección,Clave privada (formato para importar)",
			"bulklabelq1": "¿Por qué debo usar \"Direcciones en masa\" para aceptar Litecoins en mi web?",
			"bulka1": "La forma tradicional de aceptar litecoins en tu web requiere tener instalado el cliente oficial de litecoin (\"litecoind\"). Sin embargo muchos servicios de hosting no permiten instalar dicho cliente. Además, ejecutar el cliente en tu servidor supone que las claves privadas están también en el servidor y podrían ser comprometidas en caso de intrusión. Al usar este mecanismo, puedes subir al servidor sólo las dirección de litecoin y no las claves privadas. De esta forma no te tienes que preocupar de que alguien robe la cartera si se cuelan en el servidor.",
			"bulklabelq2": "¿Cómo uso \"Direcciones en masa\" para aceptar litecoins en mi web?",
			"bulklabela2li1": "Usa el tab \"Direcciones en masa\" para generar por anticipado muchas direcciones (más de 10000). Copia y pega la lista de valores separados por comas (CSV) a un archivo de texto seguro (cifrado) en tu ordenador. Guarda una copia de seguridad en algún lugar seguro.",
			"bulklabela2li2": "Importa las direcciones en la base de datos de tu servidor. No subas la cartera ni las claves públicas, o de lo contrario te lo pueden robar. Sube sólo las direcciones, ya que es lo que se va a mostrar a los clientes.",
			"bulklabela2li3": "Ofrece una alternativa en el carro de la compra de tu web para que los clientes paguen con Litecoin. Cuando el cliente elija pagar con Litecoin, les muestras una de las direcciones de la base de datos como su \"dirección de pago\" y guardas esto junto con el pedido.",
			"bulklabela2li4": "Ahora te hace falta recibir una notificación del pago. Busca en google \"notificación de pagos litecoin\" (o \"litecoin payment notification\" en inglés) y suscríbete a alguno de los servicios que aparezcan. Hay varios de ellos, que te pueden notificar vía Web services, API, SMS, email, etc. Una vez te llegue la notificación, lo cual puede ser automatizado, entonces ya puedes procesar el pedido. Para comprobar a mano si has recibido un pago, puedes usar Block Explorer: reemplaza DIRECCION a continuación por la dirección que estés comprobando. La transacción puede tardar entre 10 minutos y una hora en ser confirmada. <br />http://block-explorer.com/address/DIRECCION<br /><br />Puedes ver las transacciones sin confirmar en: http://explorer.litecoin.net/ <br />Las transacciones sin confirmar suelen aparecer ahí en unos 30 segundos.",
			"bulklabela2li5": "Las litecoins que recibas se almacenarán de forma segura en la cadena de bloques. Usa la cartera original que generaste en el paso 1 para usarlas.",

			// brain wallet html
			"brainlabelenterpassphrase": "Contraseña:",
			"brainlabelshow": "Mostrar",
			"brainprint": "Imprimir",
			"brainlabelconfirm": "Confirmar contraseña:",
			"brainview": "Ver",
			"brainalgorithm": "Algoritmo: SHA256(contraseña)",
			"brainlabelbitcoinaddress": "Dirección Litecoin:",
			"brainlabelprivatekey": "Clave privada (formato para importar):",

			// vanity wallet html
			"vanitylabelstep1": "Paso 1 - Genera tu par de claves",
			"vanitynewkeypair": "Generar",
			"vanitylabelstep1publickey": "Clave pública:",
			"vanitylabelstep1pubnotes": "Copia y pega la línea de arriba en el campo \"Your-Part-Public-Key\" de la web de Vanity Pool.",
			"vanitylabelstep1privatekey": "Clave privada:",
			"vanitylabelstep1privnotes": "Copia y pega la clave pública de arriba en un archivo de texto. Es mejor que lo almacenes en un volumen cifrado. Lo necesitarás para recuperar la clave privada una vez Vanity Pool haya encontrado tu prefijo.",
			"vanitylabelstep2calculateyourvanitywallet": "Paso 2 - Calcula tu cartera personalizada",
			"vanitylabelenteryourpart": "Introduce la clave privada generada en el paso 1, y que has guardado:",
			"vanitylabelenteryourpoolpart": "Introduce la clave privada obtenida de la Vanity Pool:",
			"vanitylabelnote1": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
			"vanitylabelnote2": "[NOTA: esta casilla de entrada puede aceptar una clave pública o clave privada]",
			"vanitylabelradioadd": "Añadir",
			"vanitylabelradiomultiply": "Multiplicar",
			"vanitycalc": "Calcular cartera personalizada",
			"vanitylabelbitcoinaddress": "Dirección Litecoin personalizada:",
			"vanitylabelnotesbitcoinaddress": "Esta es tu nueva dirección, que debería tener el prefijo deseado.",
			"vanitylabelpublickeyhex": "Clave pública personalizada (HEX):",
			"vanitylabelnotespublickeyhex": "Lo anterior es la clave pública en formato hexadecimal.",
			"vanitylabelprivatekey": "Clave privada personalizada (formato para importar):",
			"vanitylabelnotesprivatekey": "Esto es la clave privada para introducir en tu cartera.",

			// detail wallet html
			"detaillabelenterprivatekey": "Introduce la clave privada (en cualquier formato)",
			"detailview": "Ver detalles",
			"detailprint": "Imprimir",
			"detaillabelnote1": "Tu clave privada es un número secreto, único, que sólo tú conoces. Se puede expresar en varios formatos. Aquí abajo mostramos la dirección y la clave pública que se corresponden con tu clave privada, así como la clave privada en los formatos más conocidos (para importar, hex, base64 y mini).",
			"detaillabelnote2": "Litecoin v0.6+ almacena las claves públicas comprimidas. El cliente también soporta importar/exportar claves privadas usando importprivkey/dumpprivkey. El formato de las claves privadas exportadas depende de si la dirección se generó en una cartera antigua o nueva.",
			"detaillabelbitcoinaddress": "Dirección Litecoin:",
			"detaillabelbitcoinaddresscomp": "Dirección Litecoin (comprimida):",
			"detaillabelpublickey": "Clave pública (130 caracteres [0-9A-F]):",
			"detaillabelpublickeycomp": "Clave pública (comprimida, 66 caracteres [0-9A-F]):",
			"detaillabelprivwif": "Clave privada para importar<br />51 caracteres en base58, empieza con un",
			"detaillabelprivwifcomp": "Clave privada para importar<br />comprimida, 52 caracteres en base58, empieza con",
			"detaillabelprivhex": "Clave privada en formato hexadecimal (64 caracteres [0-9A-F]):",
			"detaillabelprivb64": "Clave privada en base64 (44 caracteres):",
			"detaillabelprivmini": "Clave privada en formato mini (22, 26 o 30 caracteres, empieza por 'S'):",
			"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
			"detaildecrypt": "Decrypt BIP38" //TODO: please translate
		},

		"fr": {
			// javascript alerts or messages
			"testneteditionactivated": "ÉDITION TESTNET ACTIVÉE",
			"paperlabelbitcoinaddress": "Adresse Litecoin:",
			"paperlabelprivatekey": "Clé Privée (Format d'importation de porte-monnaie):",
			"paperlabelencryptedkey": "Encrypted Private Key (Password required)", //TODO: please translate
			"bulkgeneratingaddresses": "Création de l'adresse... ",
			"brainalertpassphrasetooshort": "Le mot de passe que vous avez entré est trop court.\n\n",
			"brainalertpassphrasewarning": "Attention: Choisir un mot de passe solide est important pour vous protéger des attaques bruteforce visant à trouver votre mot de passe et voler vos Litecoins.",
			"brainalertpassphrasedoesnotmatch": "Le mot de passe ne correspond pas au mot de passe de vérification.",
			"detailalertnotvalidprivatekey": "Le texte que vous avez entré n'est pas une Clé Privée valide",
			"detailconfirmsha256": "Le texte que vous avez entré n'est pas une Clé Privée valide!\n\nVoulez-vous utiliser le texte comme un mot de passe et créer une Clé Privée à partir d'un hash SHA256 de ce mot de passe?\n\nAttention: Choisir un mot de passe solide est important pour vous protéger des attaques bruteforce visant à trouver votre mot de passe et voler vos Litecoins.",
			"bip38alertincorrectpassphrase": "Incorrect passphrase for this encrypted private key.", //TODO: please translate
			"bip38alertpassphraserequired": "Passphrase required for BIP38 key", //TODO: please translate
			"vanityinvalidinputcouldnotcombinekeys": "Entrée non valide. Impossible de combiner les clés.",
			"vanityalertinvalidinputpublickeysmatch": "Entrée non valide. La clé publique des deux entrées est identique. Vous devez entrer deux clés différentes.",
			"vanityalertinvalidinputcannotmultiple": "Entrée non valide. Il n'est pas possible de multiplier deux clés publiques. Sélectionner 'Ajouter' pour ajouter deux clés publiques pour obtenir une adresse Litecoin.",
			"vanityprivatekeyonlyavailable": "Seulement disponible si vos combinez deux clés privées",
			"vanityalertinvalidinputprivatekeysmatch": "Entrée non valide. La clé Privée des deux entrées est identique. Vous devez entrer deux clés différentes.",
			
			// header and menu html
			"tagline": "Générateur De Porte-Monnaie Litecoin Javascript Hors-Ligne",
			"generatelabelbitcoinaddress": "Création de l'adresse Litecoin...",
			"generatelabelmovemouse": "BOUGEZ votre souris pour ajouter de l'entropie...",
			"singlewallet": "Porte-Monnaie Simple",
			"paperwallet": "Porte-Monnaie Papier",
			"bulkwallet": "Porte-Monnaie En Vrac",
			"brainwallet": "Porte-Monnaie Cerveau",
			"vanitywallet": "Porte-Monnaie Vanité",
			"detailwallet": "Détails du Porte-Monnaie",
			
			// footer html
			"footerlabeldonations": "Dons:",
			"footerlabeltranslatedby": "Traduction: 1Gy7NYSJNUYqUdXTBow5d7bCUEJkUFDFSq",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "Historique De Version",
			"footerlabelgithub": "Dépôt GitHub",
			"footerlabelcopyright1": "Copyright bitaddress.org.",
			"footerlabelcopyright2": "Les droits d'auteurs JavaScript sont inclus dans le code source.",
			"footerlabelnowarranty": "Aucune garantie.",
			
			// single wallet html
			"newaddress": "Générer Une Nouvelle Adresse",
			"singleprint": "Imprimer",
			"singlelabelbitcoinaddress": "Adresse Litecoin:",
			"singlelabelprivatekey": "Clé Privée (Format d'importation de porte-monnaie):",
			"singletip1": "<b>A Litecoin wallet</b> is as simple as a single pairing of a Litecoin address with it's corresponding Litecoin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
			"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the Litecoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA1 hash of this HTML with the SHA1 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Litecoin private key should be kept a secret. Whomever you share the private key with has access to spend all the litecoins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
			"singletip3": "<b>Add funds</b> to this wallet by instructing others to send litecoins to your Litecoin address.", //TODO: please translate
			"singletip4": "<b>Check your balance</b> by going to explorer.litecoin.net or block-explorer.com and entering your Litecoin address.", //TODO: please translate
			"singletip5": "<b>Spend your litecoins</b> by downloading one of the popular litecoin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a litecoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another litecoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining litecoins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Retirer Le Style?",
			"paperlabeladdressesperpage": "Adresses par page:",
			"paperlabeladdressestogenerate": "Nombre d'adresses à créer:",
			"papergenerate": "Générer",
			"paperprint": "Imprimer",
			"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
			"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

			// bulk wallet html
			"bulklabelstartindex": "Commencer à l'index:",
			"bulklabelrowstogenerate": "Colonnes à générer:",
			"bulklabelcompressed": "Compressed addresses?", //TODO: please translate
			"bulkgenerate": "Générer",
			"bulkprint": "Imprimer",
			"bulklabelcsv": "Valeurs Séparées Par Des Virgules (CSV):",
			"bulklabelformat": "Index,Adresse,Clé Privée (WIF)",
			"bulklabelq1": "Pourquoi utiliserais-je un Porte-monnaie en vrac pour accepter les Litecoins sur mon site web?",
			"bulka1": "L'approche traditionnelle pour accepter des Litecoins sur votre site web requière l'installation du logiciel Litecoin officiel (\"litecoind\"). Plusieurs hébergeurs ne supportent pas l'installation du logiciel Litecoin. De plus, faire fonctionner le logiciel Litecoin sur votre serveur web signifie que vos clés privées sont hébergées sur le serveur et pourraient donc être volées si votre serveur web était compromis. En utilisant un Porte-monnaie en vrac, vous pouvez publiquer seulement les adresses Litecoin sur votre serveur et non les clés privées. Vous n'avez alors pas à vous inquiéter du risque de vous faire voler votre porte-monnaie si votre serveur était compromis.",
			"bulklabelq2": "Comment utiliser le Porte-monnaie en vrac pour utiliser le Litecoin sur mon site web?",
			"bulklabela2li1": "Utilisez le Porte-monnaie en vrac pour pré-générer une large quantité d'adresses Litecoin (10,000+). Copiez collez les données séparées par des virgules (CSV) dans un fichier texte sécurisé dans votre ordinateur. Sauvegardez ce fichier dans un endroit sécurisé.",
			"bulklabela2li2": "Importez les adresses Litecoin dans une base de donnée sur votre serveur web. (N'ajoutez pas le porte-monnaie ou les clés privées sur votre serveur web, sinon vous courrez le risque de vous faire voler si votre serveur est compromis. Ajoutez seulement les adresses Litecoin qui seront visibles à vos visiteurs.)",
			"bulklabela2li3": "Ajoutez une option dans votre panier en ligne pour que vos clients puissent vous payer en Litecoin. Quand un client choisi de vous payer en Litecoin, vous pouvez afficher une des adresses de votre base de donnée comme \"adresse de paiment\" pour votre client et sauvegarder cette adresse avec sa commande.",
			"bulklabela2li4": "Vous avez maintenant besoin d'être avisé quand le paiement est reçu. Cherchez \"litecoin payment notification\" sur Google et inscrivez-vous à un service de notification de paiement Litecoin. Il y a plusieurs services qui vous avertiront via des services Web, API, SMS, Email, etc. Une fois que vous avez reçu la notification, qui devrait être programmée automatiquement, vous pouvez traiter la commande de votre client. Pour vérifier manuellement si un paiement est arrivé, vous pouvez utiliser Block Explorer. Remplacez ADRESSE par l'adresse Litecoin que vous souhaitez vérifier. La confirmation de la transaction pourrait prendre de 10 à 60 minutes pour être confirmée.<br />http://block-explorer.com/address/ADRESSE<br /><br />Les transactions non confirmées peuvent être visualisées ici: http://explorer.litecoin.net/ <br />Vous devriez voir la transaction à l'intérieur de 30 secondes.",
			"bulklabela2li5": "Les Litecoins vos s'accumuler de façon sécuritaire dans la chaîne de blocs. Utilisez le porte-monnaie original que vous avez généré à l'étape 1 pour les dépenser.",
			
			// brain wallet html
			"brainlabelenterpassphrase": "Entrez votre mot de passe: ",
			"brainlabelshow": "Afficher?",
			"brainprint": "Imprimer",
			"brainlabelconfirm": "Confirmer le mot de passe: ",
			"brainview": "Visualiser",
			"brainalgorithm": "Algorithme: SHA256(mot de passe)",
			"brainlabelbitcoinaddress": "Adresse Litecoin:",
			"brainlabelprivatekey": "Clé Privée (Format d'importation de porte-monnaie):",

			// vanity wallet html
			"vanitylabelstep1": "Étape 1 - Générer votre \"Étape 1 Paire De Clés\"",
			"vanitynewkeypair": "Générer",
			"vanitylabelstep1publickey": "Étape 1 Clé Publique:",
			"vanitylabelstep1pubnotes": "Copiez celle-ci dans la case Votre-Clé-Publique du site de Vanity Pool.",
			"vanitylabelstep1privatekey": "Step 1 Clé Privée:",
			"vanitylabelstep1privnotes": "Copiez la cette Clé Privée dans un fichier texte. Idéalement, sauvegardez la dans un fichier encrypté. Vous en aurez besoin pour récupérer la Clé Privée lors que Vanity Pool aura trouvé votre préfixe.",
			"vanitylabelstep2calculateyourvanitywallet": "Étape 2 - Calculer votre Porte-monnaie Vanité",
			"vanitylabelenteryourpart": "Entrez votre Clé Privée (générée à l'étape 1 plus haut et précédemment sauvegardée):",
			"vanitylabelenteryourpoolpart": "Entrez la Clé Privée (provenant de Vanity Pool):",
			"vanitylabelnote1": "[NOTE: cette case peut accepter une clé publique ou un clé privée]",
			"vanitylabelnote2": "[NOTE: cette case peut accepter une clé publique ou un clé privée]",
			"vanitylabelradioadd": "Ajouter",
			"vanitylabelradiomultiply": "Multiplier",
			"vanitycalc": "Calculer Le Porte-monnaie Vanité",
			"vanitylabelbitcoinaddress": "Adresse Litecoin Vanité:",
			"vanitylabelnotesbitcoinaddress": "Ci-haut est votre nouvelle adresse qui devrait inclure le préfix requis.",
			"vanitylabelpublickeyhex": "Clé Public Vanité (HEX):",
			"vanitylabelnotespublickeyhex": "Celle-ci est la Clé Publique dans le format hexadécimal. ",
			"vanitylabelprivatekey": "Clé Privée Vanité (WIF):",
			"vanitylabelnotesprivatekey": "Celle-ci est la Clé Privée pour accéder à votre porte-monnaie. ",
			
			// detail wallet html
			"detaillabelenterprivatekey": "Entrez la Clé Privée (quel que soit son format)",
			"detailview": "Voir les détails",
			"detailprint": "Imprimer",
			"detaillabelnote1": "Votre Clé Privée Litecoin est un nombre secret que vous êtes le seul à connaître. Il peut être encodé sous la forme d'un nombre sous différents formats. Ci-bas, nous affichons l'adresse Litecoin et la Clé Publique qui corresponds à la Clé Privée ainsi que la Clé Privée dans les formats d'encodage les plus populaires (WIF, HEX, B64, MINI).",
			"detaillabelnote2": "Litecoin v0.6+ conserve les clés publiques dans un format compressé. Le logiciel supporte maintenant aussi l'importation et l'exportation de clés privées avec importprivkey/dumpprivkey. Le format de la clé privée exportée est déterminé selon la version du porte-monnaie Litecoin.",
			"detaillabelbitcoinaddress": "Adresse Litecoin:",
			"detaillabelbitcoinaddresscomp": "Adresse Litecoin (compressée):",
			"detaillabelpublickey": "Clé Publique (130 caractères [0-9A-F]):",
			"detaillabelpublickeycomp": "Clé Publique (compressée, 66 caractères [0-9A-F]):",
			"detaillabelprivwif": "Clé Privée WIF<br />51 caractères base58, débute avec un a",
			"detaillabelprivwifcomp": "Clé Privée WIF<br />compressée, 52 caractères base58, débute avec un a",
			"detaillabelprivhex": "Clé Privée Format Hexadecimal (64 caractères [0-9A-F]):",
			"detaillabelprivb64": "Clé Privée Base64 (44 caractères):",
			"detaillabelprivmini": "Clé Privée Format Mini (22, 26 ou 30 caractères, débute avec un 'S'):",
			"detaillabelpassphrase": "BIP38 Passphrase", //TODO: please translate
			"detaildecrypt": "Decrypt BIP38" //TODO: please translate
		},

		"el": {
			// javascript alerts or messages
			"testneteditionactivated": "ΕΝΕΡΓΗ ΕΚΔΟΣΗ TESTNET",
			"paperlabelbitcoinaddress": "Διεύθυνση Litecoin:",
			"paperlabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",
			"paperlabelencryptedkey": "Encrypted Private Key (Password required)", //TODO: please translate
			"bulkgeneratingaddresses": "Δημιουργία διευθύνσεων... ",
			"brainalertpassphrasetooshort": "Η φράση κωδικός που δώσατε είναι πολύ αδύναμη.\n\n",
			"brainalertpassphrasewarning": "Προσοχή: Είναι σημαντικό να επιλέξετε μια ισχυρή φράση κωδικό που θα σας προφυλάξει από απόπειρες παραβίασής της τύπου brute force και κλοπή των litecoins σας.",
			"brainalertpassphrasedoesnotmatch": "Η φράση κωδικός και η επιβεβαίωση της δε συμφωνούν.",
			"detailalertnotvalidprivatekey": "Το κείμενο που εισάγατε δεν αντιστοιχεί σε έγκυρο Προσωπικό Κλειδί",
			"detailconfirmsha256": "Το κείμενο που εισάγατε δεν αντιστοιχεί σε έγκυρο Προσωπικό Κλειδί!\n\nΘα θέλατε να χρησιμοποιηθεί το κείμενο ως κωδικός για τη δημιουργία ενός Προσωπικού Κλειδιού που θα δημιουργηθεί από το SHA265 hash της φράσης κωδικού;\n\nΠροσοχή: Είναι σημαντικό να επιλέξετε έναν ισχυρό κωδικό ώστε να είναι δύσκολο να τον μαντέψει κάποιος και να κλέψει τα litecoins σας.",
			"bip38alertincorrectpassphrase": "Λάθος φράση κωδικός αποκρυπτογράφησης Προσωπικού Κλειδιού.",
			"bip38alertpassphraserequired": "Απαιτείται η φράση κωδικός για το Κλειδί BIP38",
			"vanityinvalidinputcouldnotcombinekeys": "Μη έγκυρη εισαγωγή. Ο συνδυασμός των κλειδιών είναι αδύνατος.",
			"vanityalertinvalidinputpublickeysmatch": "Μη έγκυρη εισαγωγή. Τα Δημόσια Κλειδιά των δύο εγγραφών είναι όμοια. Πρέπει να εισάγετε δύο διαφορετικά Κλειδιά.",
			"vanityalertinvalidinputcannotmultiple": "Μη έγκυρη εισαγωγή. Δεν είναι δυνατός ο πολλαπλασιασμός δύο Δημόσιων Κλειδιών. Επιλέξτε 'Πρόσθεση' για να προσθέσετε δύο Δημόσια Κλειδιά για δημιουργία μίας Διεύθυνσης Litecoin.",
			"vanityprivatekeyonlyavailable": "Διαθέσιμο μόνο κατά το συνδυασμό δύο Προσωπικών Κλειδιών",
			"vanityalertinvalidinputprivatekeysmatch": "Μη έγκυρη εισαγωγή. Τα Προσωπικά Κλειδιά των δύο εγγραφών είναι όμοια. Πρέπει να εισάγετε δύο διαφορετικά Κλειδιά.",

			// header and menu html
			"tagline": "Δημιουργός Διευθύνσεων Litecoin, ανοικτού κώδικα Javascript",
			"generatelabelbitcoinaddress": "Δημιουργία Διεύθυνσης Litecoin...",
			"generatelabelmovemouse": "ΚΟΥΝΗΣΤΕ το ποντίκι τριγύρω για να προσθέσετε επιπλέον τυχαιότητα...",
			"singlewallet": "Απλό Πορτοφόλι",
			"paperwallet": "Χάρτινο Πορτοφόλι",
			"bulkwallet": "Πολλαπλά Πορτοφόλια",
			"brainwallet": "Μνημονικό Πορτοφόλι",
			"vanitywallet": "Πορτοφόλι Vanity",
			"detailwallet": "Λεπτομέρειες Πορτοφολιού",

			// footer html
			"footerlabeldonations": "Δωρεές:",
			"footerlabeltranslatedby": "Μετάφραση: <a href='http://LitecoinX.gr/'><b>LitecoinX.gr</b></a> 1BitcoiNxkUPcTFxwMqxhRiPEiQRzYskf6",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "ιστορικό εκδόσεων",
			"footerlabelgithub": "Αποθετήριο GitHub",
			"footerlabelcopyright1": "Copyright bitaddress.org.",
			"footerlabelcopyright2": "Τα πνευματικά δικαιώματα της JavaScript περιλαμβάνονται στον κώδικα.",
			"footerlabelnowarranty": "Καμία εγγύηση.",

			// single wallet html
			"newaddress": "Δημιουργία μιας νέας Διεύθυνσης",
			"singleprint": "Εκτύπωση",
			"singlelabelbitcoinaddress": "Διεύθυνση Litecoin:",
			"singlelabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",
			"singletip1": "<b>A Litecoin wallet</b> is as simple as a single pairing of a Litecoin address with it's corresponding Litecoin private key. Such a wallet has been generated for you in your web browser and is displayed above.", //TODO: please translate
			"singletip2": "<b>To safeguard this wallet</b> you must print or otherwise record the Litecoin address and private key. It is important to make a backup copy of the private key and store it in a safe location. This site does not have knowledge of your private key. If you are familiar with PGP you can download this all-in-one HTML page and check that you have an authentic version from the author of this site by matching the SHA1 hash of this HTML with the SHA1 hash available in the signed version history document linked on the footer of this site. If you leave/refresh the site or press the Generate New Address button then a new private key will be generated and the previously displayed private key will not be retrievable.	Your Litecoin private key should be kept a secret. Whomever you share the private key with has access to spend all the litecoins associated with that address. If you print your wallet then store it in a zip lock bag to keep it safe from water. Treat a paper wallet like cash.", //TODO: please translate
			"singletip3": "<b>Add funds</b> to this wallet by instructing others to send litecoins to your Litecoin address.", //TODO: please translate
			"singletip4": "<b>Check your balance</b> by going to explorer.litecoin.net or block-explorer.com and entering your Litecoin address.", //TODO: please translate
			"singletip5": "<b>Spend your litecoins</b> by downloading one of the popular litecoin p2p clients and importing your private key to the p2p client wallet. Keep in mind when you import your single key to a litecoin p2p client and spend funds your key will be bundled with other private keys in the p2p client wallet. When you perform a transaction your change will be sent to another litecoin address within the p2p client wallet. You must then backup the p2p client wallet and keep it safe as your remaining litecoins will be stored there. Satoshi advised that one should never delete a wallet.", //TODO: please translate

			// paper wallet html
			"paperlabelhideart": "Απόκρυψη γραφικού;",
			"paperlabeladdressesperpage": "Διευθύνσεις ανά σελίδα:",
			"paperlabeladdressestogenerate": "Πλήθος διευθύνσεων:",
			"papergenerate": "Δημιουργία",
			"paperprint": "Εκτύπωση",
			"paperlabelBIPpassphrase": "Passphrase:", //TODO: please translate
			"paperlabelencrypt": "BIP38 Encrypt?", //TODO: please translate

			// bulk wallet html
			"bulklabelstartindex": "Ξεκίνημα δείκτη:",
			"bulklabelrowstogenerate": "Πλήθος σειρών:",
			"bulklabelcompressed": "Συμπιεσμένες διευθύνσεις;",
			"bulkgenerate": "Δημιουργία",
			"bulkprint": "Εκτύπωση",
			"bulklabelcsv": "Τιμές που χωρίζονται με κόμμα (CSV):",
			"bulklabelformat": "Δείκτης,Διεύθυνση,Προσωπικό Κλειδί (WIF)",
			"bulklabelq1": "Γιατί να χρησιμοποιήσω Πολλαπλά Πορτοφόλια στην ιστοσελίδα μου;",
			"bulka1": "Ο παραδοσιακός τρόπος για να δέχεστε litecoins στην ιστοσελίδα σας, απαιτεί την εγκατάσταση και λειτουργία του επίσημου δαίμονα πελάτη litecoin (\"litecoind\"). Αρκετά πακέτα φιλοξενίας δεν υποστηρίζουν την εγκατάστασή του. Επιπλέον, η εκτέλεση του πελάτη litecoin στον web server σας συνεπάγεται και τη φιλοξενία των προσωπικών σας κλειδιών στον ίδιο server, τα οποία μπορεί να υποκλαπούν αν ο server πέσει θύμα επίθεσης. Χρησιμοποιώντας τα Πολλαπλά Πορτοφόλια, ανεβάζετε στον server σας μόνο τις διευθύνσεις Litecoin κι όχι τα προσωπικά κλειδιά. Με αυτό τον τρόπο δεν χρειάζεται να ανησυχείτε μήπως υποκλαπεί το πορτοφόλι σας.",
			"bulklabelq2": "Πως χρησιμοποιώ τα Πολλαπλά Πορτοφόλια για να δέχομαι litecoins στην ιστοσελίδα μου;",
			"bulklabela2li1": "Χρησιμοποιήστε την καρτέλα Πολλαπλά Πορτοφόλια για να δημιουργήσετε έναν μεγάλο αριθμό διευθύνσεων Litecoin (10.000+). Αντιγράψτε κι επικολλήστε τη λίστα των χωρισμένων με κόμμα τιμών (CSV) που δημιουργήθηκαν, σε ένα ασφαλές αρχείο στον υπολογιστή σας. Αντιγράψτε το αρχείο που δημιουργήσατε σε μια ασφαλή τοποθεσία.",
			"bulklabela2li2": "Εισάγετε τις διευθύνσεις Litecoin σε έναν πίνακα βάσης δεδομένων στον web server σας. (Μην αντιγράψετε τα προσωπικά κλειδιά ή το πορτοφόλι στον web server γιατί διακινδυνεύετε να σας τα κλέψουν. Μόνο τις διευθύνσεις Litecoin που θα εμφανίζονται στους πελάτες.)",
			"bulklabela2li3": "Παρέχετε στο καλάθι αγορών σας μια επιλογή για πληρωμή σε Litecoin. Όταν ο πελάτης επιλέγει να πληρώσει με Litecoin, θα εμφανίσετε σε αυτόν μια από τις διευθύνσεις από τη βάση δεδομένων, ως την «προσωπική του διεύθυνση πληρωμής» την οποία θα αποθηκεύσετε μαζί με την εντολή αγοράς.",
			"bulklabela2li4": "Τώρα χρειάζεται να ειδοποιηθείτε μόλις γίνει η πληρωμή. Ψάξτε στο Google για «litecoin payment notification» κι εγγραφείτε σε τουλάχιστο μία υπηρεσία ειδοποίησης πληρωμής. Υπάρχουν διάφορες υπηρεσίες που θα σας ειδοποιήσουν με Web υπηρεσίες, API, SMS, Email, κλπ. Όταν λάβετε την ειδοποίηση, η οποία μπορεί να αυτοματοποιηθεί προγραμματιστικά, εκτελείτε την εντολή του πελάτη. Για να ελέγξετε χειροκίνητα την πληρωμή μπορείτε να χρησιμοποιήσετε τον Block Explorer. Αντικαταστήστε το THEADDRESSGOESHERE με τη Litecoin διεύθυνσή σας. Η επιβεβαίωση της πληρωμής ενδέχεται να διαρκέσει από δέκα λεπτά έως μία ώρα.<br />http://block-explorer.com/address/THEADDRESSGOESHERE<br /><br />Μπορείτε να δείτε τις συναλλαγές που δεν έχουν επιβεβαιωθεί στο: http://explorer.litecoin.net/ <br />Θα πρέπει να δείτε τη συναλλαγή εκεί εντός 30 δευτερολέπτων.",
			"bulklabela2li5": "Τα Litecoins θα συσσωρεύονται με ασφάλεια στην αλυσίδα των μπλοκ. Χρησιμοποιήστε το αρχικό πορτοφόλι που δημιουργήσατε στο βήμα 1 για να τα ξοδέψετε.",
			
			// brain wallet html
			"brainlabelenterpassphrase": "Εισάγετε κωδικό: ",
			"brainlabelshow": "Εμφάνιση;",
			"brainprint": "Εκτύπωση",
			"brainlabelconfirm": "Επιβεβαιώστε τον κωδικό: ",
			"brainview": "Δημιουργία",
			"brainalgorithm": "Αλγόριθμος: SHA256(κωδικός)",
			"brainlabelbitcoinaddress": "Διεύθυνση Litecoin:",
			"brainlabelprivatekey": "Προσωπικό Κλειδί (Μορφή εισαγωγής σε πορτοφόλι):",
			
			// vanity wallet html
			"vanitylabelstep1": "Βήμα 1 - Δημιουργήστε το «Ζεύγος κλειδιών του Βήματος 1»",
			"vanitynewkeypair": "Δημιουργία",
			"vanitylabelstep1publickey": "Βήμα 1 Δημόσιο Κλειδί:",
			"vanitylabelstep1pubnotes": "Αντιγράψτε κι επικολλήστε το παραπάνω στο πεδίο Your-Part-Public-Key στην ιστοσελίδα του Vanity Pool.",
			"vanitylabelstep1privatekey": "Step 1 Προσωπικό Κλειδί:",
			"vanitylabelstep1privnotes": "Αντιγράψτε κι επικολλήστε το παραπάνω Προσωπικό Κλειδί σε ένα αρχείο κειμένου. Ιδανικά, αποθηκεύστε το σε έναν κρυπτογραφημένο δίσκο. Θα το χρειαστείτε για να ανακτήσετε το Litecoin Προσωπικό Κλειδί όταν βρεθεί το πρόθεμά σας από το Vanity Pool.",
			"vanitylabelstep2calculateyourvanitywallet": "Βήμα 2 - Υπολογίστε το Vanity Πορτοφόλι σας.",
			"vanitylabelenteryourpart": "Εισάγετε το Προσωπικό Κλειδί που δημιουργήσατε στο Βήμα 1 κι αποθηκεύσατε:",
			"vanitylabelenteryourpoolpart": "Εισάγετε το Προσωπικό Κλειδί από το Vanity Pool:",
			"vanitylabelnote1": "[ΣΗΜΕΙΩΣΗ: Το πεδίο αυτό μπορεί να δεχθεί είτε ένα Δημόσιο είτε ένα Προσωπικό Κλειδί.]",
			"vanitylabelnote2": "[ΣΗΜΕΙΩΣΗ: Το πεδίο αυτό μπορεί να δεχθεί είτε ένα Δημόσιο είτε ένα Προσωπικό Κλειδί.]",
			"vanitylabelradioadd": "Πρόσθεσε",
			"vanitylabelradiomultiply": "Πολλαπλασίασε",
			"vanitycalc": "Υπολογισμός του Πορτοφολιού Vanity",
			"vanitylabelbitcoinaddress": "Vanity Διεύθυνση Litecoin:",
			"vanitylabelnotesbitcoinaddress": "Παραπάνω είναι η διεύθυνσή σας που θα πρέπει να περιλαμβάνει το επιθυμητό πρόθεμα.",
			"vanitylabelpublickeyhex": "Vanity Δημόσιο Κλειδί (HEX):",
			"vanitylabelnotespublickeyhex": "Παραπάνω είναι το Δημόσιο Κλειδί σε δεκαεξαδική μορφή. ",
			"vanitylabelprivatekey": "Vanity Προσωπικό Κλειδί (WIF):",
			"vanitylabelnotesprivatekey": "Παραπάνω είναι το Προσωπικό Κλειδί που θα φορτώσετε στο Πορτοφόλι σας. ",
			
			// detail wallet html
			"detaillabelenterprivatekey": "Εισάγετε το Προσωπικό Κλειδί (οποιαδήποτε μορφή)",
			"detailview": "Προβολή λεπτομερειών",
			"detailprint": "Εκτύπωση",
			"detaillabelnote1": "Το Litecoin Προσωπικό Κλειδί είναι ένας μοναδικός και μυστικός αριθμός που μόνο εσείς πρέπει να γνωρίζετε, ο οποίος μπορεί να κωδικοποιηθεί σε πολλές διαφορετικές μορφές. Εμφανίζουμε παρακάτω τη διεύθυνση Litecoin και το Δημόσιο Κλειδί, μαζί με το Προσωπικό Κλειδί, στις πιο δημοφιλείς μορφές  (WIF, HEX, B64, MINI).",
			"detaillabelnote2": "Το Litecoin v0.6+ αποθηκεύει τα Προσωπικά Κλειδιά σε συμπιεσμένη μορφή. Το πρόγραμμα υποστηρίζει επίσης εισαγωγή κι εξαγωγή των Προσωπικών Κλειδιών με τις εντολές importprivkey/dumpprivkey. Η μορφή του εξαγόμενου Προσωπικού Κλειδιού προσδιορίζεται από το αν η διεύθυνση δημιουργήθηκε σε ένα παλιό ή νέο πορτοφόλι.",
			"detaillabelbitcoinaddress": "Διεύθυνση Litecoin:",
			"detaillabelbitcoinaddresscomp": "Συμπιεσμένη Διεύθυνση Litecoin:",
			"detaillabelpublickey": "Δημόσιο Κλειδί (130 χαρακτήρες [0-9A-F]):",
			"detaillabelpublickeycomp": "Δημόσιο Κλειδί (Συμπιεσμένο, 66 χαρακτήρες [0-9A-F]):",
			"detaillabelprivwif": "Προσωπικό Κλειδί WIF<br />51 χαρακτήρες base58, ξεκινάει με",
			"detaillabelprivwifcomp": "Προσωπικό Κλειδί WIF<br />Συμπιεσμένο, 52 χαρακτήρες base58, ξεκινάει με",
			"detaillabelprivhex": "Προσωπικό Κλειδί Δεκαεξαδική Μορφή (64 χαρακτήρες [0-9A-F]):",
			"detaillabelprivb64": "Προσωπικό Κλειδί Base64 (44 χαρακτήρες):",
			"detaillabelprivmini": "Προσωπικό Κλειδί Μορφή Mini (22, 26 ή 30 χαρακτήρες, ξεκινάει με 'S'):",
			"detaillabelpassphrase": "BIP38 Κωδικός",
			"detaildecrypt": "Αποκωδικοποίηση BIP38"
		},
		"ru": {
			// javascript alerts or messages
			"testneteditionactivated": "АКТИВИРОВАНА ТЕСТОВАЯ СЕТЬ",
			"paperlabelbitcoinaddress": "Litecoin адрес:",
			"paperlabelprivatekey": "Приватный ключ (Формат импортруемого кошелька):",
			"paperlabelencryptedkey": "Зашифрованный приватный ключ (Необходим пароль)",
			"bulkgeneratingaddresses": "Генерация адресов... ",
			"brainalertpassphrasetooshort": "Введенный Вами пароль очень короткий.\n\n",
			"brainalertpassphrasewarning": "Внимание: Очень важен выбор сильного пароля во избежание взлома методом подбора и кражи ваших litecoin монет.",
			"brainalertpassphrasedoesnotmatch": "Пароли не совпадают, повторите ввод пароля.",
			"detailalertnotvalidprivatekey": "Введенный Вами текст содержит не допустимый Приватный ключ",
			"detailconfirmsha256": "Введенный Вами текст содержит не допустимый Приватный ключ!\n\nВы хотите использовать введенный текст в качестве пароля и создать Приватный ключ, используя хеш SHA256 пароля? \n\nВнимание: Внимание: Очень важен выбор сильного пароля во избежание взлома методом подбора и кражи ваших litecoin монет.",
			"bip38alertincorrectpassphrase": "Неправильный пароль для этого зашифрованного Приватного ключа.",
			"bip38alertpassphraserequired": "Пароль, необходимый для ключа BIP38",
			"vanityinvalidinputcouldnotcombinekeys": "Ошибка ввода. Ключи не объединены.",
			"vanityalertinvalidinputpublickeysmatch": "Ошибка ввода. Публичный ключ одинаков для записей. Вы должны ввести два различных ключа.",
			"vanityalertinvalidinputcannotmultiple": "Ошибка ввода. Невозможно умножить два Публичных ключа.  Выберите 'Add', чтобы добавить два открытых ключа и получить адрес litecoin",
			"vanityprivatekeyonlyavailable": "Доступно только при объединении двух Приватных ключей.",
			"vanityalertinvalidinputprivatekeysmatch": "Ошибка ввода. Приватный ключ одинаков для записей. Вы должны ввести два различных ключа."
			
			// header and menu html
			"tagline": "JavaScript генератор кошелька Litecoin на стороне клиента с открытым исходным кодом",
			"generatelabelbitcoinaddress": "Генерация адреса Litecoin...",
			"generatelabelmovemouse": "Двигате указателем мыши для увеличения энтропии...",
			"singlewallet": "Простой кошелек",
			"paperwallet": "Бумажный кошелек",
			"bulkwallet": "Массовый кошелек",
			"brainwallet": "Кошелек в памяти",
			"vanitywallet": "Персонализированный кошелек",
			"detailwallet": "Свойства кошелька",
			
			// footer html
			"footerlabeldonations": "Пожертвования:",
			"footerlabeltranslatedby": "Перевод: LMDk3oqy1SEZvf7R6k8t3MpysqKrywHDXD",
			"footerlabelpgp": "PGP",
			"footerlabelversion": "История версий",
			"footerlabelgithub": "Репозиторий на  GitHub",
			"footerlabelcopyright1": "Авторские права bitaddress.org.",
			"footerlabelcopyright2": "Авторские права JavaScript указаны  в исходном коде.",
			"footerlabelnowarranty": "Без гарантии",

			// single wallet html
			"newaddress": "Создание нового адреса",
			"singleprint": "Печать",
			"singlelabelbitcoinaddress": "Адрес Litecoin",
			"singlelabelprivatekey": "Приватный ключ (формат для импорта в бумажник):",
			"singletip1": "<b>Бумажник Litecoin</b> содержащий в себе один адрес для монет Litecoin и соответствующий ему Приватный ключ Litecoin. Такой кошелек был сгенерирован для Вас в Вашем веб-браузере и выведен на экран выше.", 
			"singletip2": "<b>Берегите этот кошелек</b> Вы должны распечатать или записать адрес Litecoin и Приватный ключ. Так же важно сделать резервную копию Приватного ключа и сохранить его в безопасном месте. Этого сайт не знает Ваш Приватный ключ. Если Вы знакомы с PGP, Вы можете загрузить эту страницу HTML и проверить, что у Вас есть подлинная версия от автора этого сайта, соответствующая хеш SHA1 этого HTML с хешем SHA1, доступным в документе истории версий со значением, указанном в нижнем колонтитуле этого сайта. Если Вы обновите сайт или нажмете кнопку 'Создание нового адреса' тогда будет сгенерирован новый Приватный ключ и ранее выведенный на экран закрытый ключ не будет доступен. Ваш закрытый ключ Litecoin должен быть сохранен надежно и безопасно. У того, с кем Вы будете совместно использовать Приватный ключ, есть такой же доступ, как и у Вас, и он сможет  потратить все Litecoin, связанные с тем адресом. Если Вы распечатаете свой кошелек, тогда храните его в мешке zip или заламинируйте, чтобы уберечь его от воды. Рассматривайте бумажный кошелек как наличные деньги.",
			"singletip3": "<b>Добавить средства</b> на этот бумажник можно просто указав этот адрес Litecoin в качестве получателя монет.", 
			"singletip4": "<b>Проверить баланс </b> можно перейдя по адресу <a href="http://explorer.litecoin.net"> explorer.litecoin.net</a> или <a href="http://block-explorer.com"> block-explorer.com</a> и ввести свой Litecoin адрес.", 
			"singletip5": "<b> Потратьте свои Litecoin</b>, загрузите один из популярных клиентов Litecoin p2p и импортируйте Ваш Приватный ключ в кошелек p2p программы-клиента. Следует иметь в виду, когда Вы импортируете свой созданный ключ в программу-клиент Litecoin p2p, Ваш ключ будет связан другими Приватными ключами в p2p клиентском кошельке и средства будут объединены. Когда Вы выполните транзакцию, Ваши изменения будут отправлены на другой адрес Litecoin в p2p клиентском кошельке. Вы должны тогда скопировать p2p клиентский кошелек и бережно хранить его, поскольку Ваши оставшиеся Litecoin монеты будут сохранены в нем. Сатоши советовал - никогда не удаляйте кошелек.", 

			// paper wallet html
			"paperlabelhideart": "Скрыть картинки",
			"paperlabeladdressesperpage": "Адресов на странице:",
			"paperlabeladdressestogenerate": "Количество адресов:",
			"papergenerate": "Сгенерировать",
			"paperprint": "Печать",
			"paperlabelBIPpassphrase": "Пароль:", 
			"paperlabelencrypt": "Включить шифрование BIP38?",

// bulk wallet html
			"bulklabelstartindex": "Начать с:",
			"bulklabelrowstogenerate": "Количество колонок:",
			"bulklabelcompressed": "Сжатие адресов?", 
			"bulkgenerate": "Сгенерировать",
			"bulkprint": "Печать",
			"bulklabelcsv": "Значения, разделенные запятыми (CSV):",
			"bulklabelformat": "Индекс, адрес, Приватный ключ (WIF)",
			"bulklabelq1": "Почему я должен использовать Массовый кошелек, чтобы принимать Litecoin на моем веб-сайте?",
			"bulka1": "Традиционный подход к принятию Litecoinна Вашем веб-сайте требует, чтобы Вы установили официального клиентского демона  litecoin ("litecoind"). Многие веб-хостинги не поддерживают установку litecoin демона. Кроме того, выполнение litecoin демона на Вашем веб-сервере означает, что Ваши приватные ключи размещены на сервере и могут быть украдены, если Ваш веб-сервер взломан. При использовании Массового кошелька Вы можете загрузить только адреса Litecoin, а не приватные ключи к Вашему веб-серверу. Тогда Вы не будете волноваться о своем Litecoin кошельке, украденном, если Ваш веб-сервер взломан.",
			"bulklabelq2": "Как использовать Массовый кошелек для приема Litecoin на моем сайте?",
			"bulklabela2li1": "Используйте вкладку Массовый кошелек, чтобы предварительно сгенерировать большое количество адресов Litecoin (10,000 +). Скопируйте и вставьте сгенерированный список значений, разделенных запятой (CSV) в текстовый файл на Вашем компьютере. Скопируйте файл, который Вы создали в безопасное место.",
			"bulklabela2li2": "Импортируйте адреса Litecoin в таблицу базы данных на Вашем веб-сервере. (Не помещайте кошелек/приватные ключи на свой веб-сервер, иначе Вы рискуете столкнуться с хакерами, которые смогут украсть Ваши монеты. Просто используйте Litecoin адреса, поскольку только они будут показаны клиентам.)",
			"bulklabela2li3": "Добавьте возможность для Вашего клиента в корзине своего веб-сайта оплачивать в Litecoin. Когда клиент примет решение заплатить в Litecoin, Вы выведете на экран один из адресов Вашей базы данных для клиента как его "платежный адрес" и сохраните с его порядковым номером корзины.",
			"bulklabela2li4": "Вы теперь должны быть уведомлены, когда поступит оплата. Задайте в Google поиск "litecoin уведомление об оплате" и подпишитесь по крайней мере на одну litecoin службу уведомления об оплате. Есть различные службы, которые уведомят Вас через веб-сервисы, API, SMS, электронную почту, и т.д. Как только Вы получаете это уведомление, которое можно программно автоматизировать, Вы можете обработать корзину клиента. Чтобы вручную проверить, прибыла ли оплата, Вы можете использовать проводник блоков. Замените THEADDRESSGOESHERE адресом litecoin, который Вы собираетесь проверить. Это может занять от 10 минут до одного часа для подтверждения транзакции.
http://block-explorer .com/address/THEADDRESSGOESHERE
Неподтвержденные транзакции могут быть просмотрены в: http://explorer.litecoin.net/
Вы должны видеть транзакцию там в течение 30 секунд.",
			"bulklabela2li5": "Litecoin безопасно копится на блочной цепи. Используйте исходный файл бумажника, который Вы генерировали на шаге 1, чтобы потратить их.",
			
			// brain wallet html
			"brainlabelenterpassphrase": "Введите пароль: ",
			"brainlabelshow": "Показать?",
			"brainprint": "Печать",
			"brainlabelconfirm": "Подтвердите пароль: ",
			"brainview": "Просмотр",
			"brainalgorithm": "Алгоритм: SHA256(пароль)",
			"brainlabelbitcoinaddress": "Адрес Litecoin:",
			"brainlabelprivatekey": "Приватный ключ (Формат для импорта кошелька):",
			
			// vanity wallet html
			"vanitylabelstep1": "Шаг 1 — создание пары ключей",
			"vanitynewkeypair": "Сгенерировать",
			"vanitylabelstep1publickey": "Публичный ключ:",
			"vanitylabelstep1pubnotes": "Скопируйте и вставьте вышеупомянутое в поле \"Your-Part-Public-Key\" на веб-сайте пула персональных адресов.",
			"vanitylabelstep1privatekey": "Приватный ключ:",
			"vanitylabelstep1privnotes": "Скопируйте и вставьте вышеупомянутое поле Приватный ключ в текстовый файл. В идеале сохраните на зашифрованном диске. Он понадобится Вам, чтобы получить Приватный ключ Litecoin, как только пул найдет Ваш префикс.",
			"vanitylabelstep2calculateyourvanitywallet": "Шаг 2 — вычисление Вашего персонального кошелька",
			"vanitylabelenteryourpart": "Введите свою часть Приватного ключа (сгенерированный на Шаге 1 выше, сохраненный ранее):",
			"vanitylabelenteryourpoolpart": "Введите часть Закрытого ключа с пула персональных адресов:",
			"vanitylabelnote1": "[ПРИМЕЧАНИЕ: это поле ввода может принять Публичный или Приватный ключ]",
			"vanitylabelnote2": "[ПРИМЕЧАНИЕ: это поле ввода может принять Публичный или Приватный ключ]",
			"vanitylabelradioadd": "Добавить",
			"vanitylabelradiomultiply": "Перемножить",
			"vanitycalc": "Вычислить персональный кошелек",
			"vanitylabelbitcoinaddress": "Персональный Litecoin адрес:",
			"vanitylabelnotesbitcoinaddress": "Это Ваш новый адрес, который должен включать Ваш требуемый префикс.",
			"vanitylabelpublickeyhex": "Персональный Litecoin адрес (HEX):",
			"vanitylabelnotespublickeyhex": "Это Публичный ключ в шестнадцатеричном формате.",
			"vanitylabelprivatekey": "Персональный Litecoin адрес (формат для импорта):",
			"vanitylabelnotesprivatekey": "Это Приватный ключ для импорта в кошелек",

			// detail wallet html
			"detaillabelenterprivatekey": "Введите Приватный ключ (любой формат)",
			"detailview": "Просмотр деталей",
			"detailprint": "Печать",
			"detaillabelnote1": "Ваш Закрытый ключ Litecoin - уникальное секретное число, которое знаете только Вы. Оно может быть закодировано во многих различных форматах. Ниже Вы видете адрес Litecoin и Публичный ключ, который соответствует Вашему Приватному ключу, а также Вашему Приватному ключу в самых популярных форматах кодирования (WIF, ВЕДЬМА, B64, МИНИ-, BIP38).",
			"detaillabelnote2": "Litecoin v0.6 + хранит открытые ключи в сжатом формате. Клиент также теперь поддерживает импорт и экспорт Приватных ключей с importprivkey/dumpprivkey. Формат экспортируемого Приватного ключа определен тем, был ли адрес сгенерирован в старом или новом кошельке.",
			"detaillabelbitcoinaddress": "Адрес Litecoin:",
			"detaillabelbitcoinaddresscomp": "Адрес Litecoin (сжатый):",
			"detaillabelpublickey": "Публичный ключ (130 символов [0-9A-F]):",
			"detaillabelpublickeycomp": "Публичный ключ (сжатый, 66 символов [0-9A-F]):",
			"detaillabelprivwif": "Публичный ключ WIF<br />51 символа base58, начинающийся с",
			"detaillabelprivwifcomp": "Публичный ключ WIF<br />сжатый, 52 символа base58, начинающийся с",
			"detaillabelprivhex": "Приватный ключ в шестнадцатеричном виде (64 символа [0-9A-F]):",
			"detaillabelprivb64": " Приватный ключ Base64 (44 символа):",
			"detaillabelprivmini": " Приватный ключ в формате Mini (22, 26 или 30 символов, начинающиеся с 'S'):",
			"detaillabelpassphrase": "BIP38 Пароль", 
			"detaildecrypt": "Расшифрованный BIP38" 
		}
	}
};

ninja.translator.showEnglishJson = function () {
	var english = ninja.translator.translations["en"];
	var spanish = ninja.translator.translations["es"];
	var spanishClone = {};
	for (var key in spanish) {
		spanishClone[key] = spanish[key];
	}
	var newLang = {};
	for (var key in english) {
		newLang[key] = english[key];
		delete spanishClone[key];
	}
	for (var key in spanishClone) {
		if (document.getElementById(key)) {
			if (document.getElementById(key).value) {
				newLang[key] = document.getElementById(key).value;
			}
			else {
				newLang[key] = document.getElementById(key).innerHTML;
			}
		}
	}
	var div = document.createElement("div");
	div.setAttribute("class", "englishjson");
	div.innerHTML = "<h3>English Json</h3>";
	var elem = document.createElement("textarea");
	elem.setAttribute("rows", "15");
	elem.setAttribute("cols", "110");
	elem.setAttribute("wrap", "off");
	var langJson = "{\n";
	for (var key in newLang) {
		langJson += "\t\"" + key + "\"" + ": " + "\"" + newLang[key].replace(/\"/g, "\\\"").replace(/\n/g, "\\n") + "\",\n";
	}
	langJson = langJson.substr(0, langJson.length - 2);
	langJson += "\n}\n";
	elem.innerHTML = langJson;
	div.appendChild(elem);
	document.body.appendChild(div);
};
