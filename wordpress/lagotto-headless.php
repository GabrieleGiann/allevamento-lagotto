<?php
/**
 * Plugin Name: Lagotto Headless CMS
 * Description: Registra il custom post type "cani" con REST API e i campi richiesti dal frontend Next.js (headless). Inserisce 8 schede di esempio. Nessun plugin ACF necessario.
 * Version: 1.0.0
 * Author: Allevamento Lagotto
 *
 * COME INSTALLARLO (super semplice):
 *  - Carica questo file in:  wp-content/mu-plugins/lagotto-headless.php
 *    (se la cartella "mu-plugins" non esiste, creala dentro wp-content)
 *  - I "mu-plugins" si attivano da soli: niente da cliccare.
 *  - Verifica l'API aprendo:  https://cms.TUODOMINIO.it/wp-json/wp/v2/cani
 *
 * Il frontend (lib/wordpress.js) legge i campi da post.acf.* e da post.title.
 * Questo file espone esattamente quella forma.
 */

if (!defined('ABSPATH')) {
    exit;
}

/* -------------------------------------------------------------------------
 * 1) Custom Post Type "cani" + meta, con REST attiva
 * ---------------------------------------------------------------------- */
add_action('init', function () {
    register_post_type('cani', [
        'labels' => [
            'name'          => 'Cani',
            'singular_name' => 'Cane',
            'add_new_item'  => 'Aggiungi cane',
            'edit_item'     => 'Modifica cane',
            'menu_name'     => 'Cani (sito)',
        ],
        'public'       => true,
        'show_in_rest' => true,          // abilita /wp-json/wp/v2/cani
        'rest_base'    => 'cani',
        'menu_icon'    => 'dashicons-pets',
        'has_archive'  => false,
        'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields', 'page-attributes'],
    ]);

    // Campi personalizzati (modificabili nell'editor e visibili in REST)
    $keys = ['categoria', 'badge', 'sottotitolo', 'descrizione', 'alt', 'immagine', 'scheda'];
    foreach ($keys as $k) {
        register_post_meta('cani', '_lag_' . $k, [
            'type'          => 'string',
            'single'        => true,
            'show_in_rest'  => true,
            'auth_callback' => function () { return current_user_can('edit_posts'); },
        ]);
    }
});

/* -------------------------------------------------------------------------
 * 2) Espone un oggetto "acf" in REST nella forma attesa dal frontend Next.js
 * ---------------------------------------------------------------------- */
add_action('rest_api_init', function () {
    register_rest_field('cani', 'acf', [
        'get_callback' => function ($post) {
            $id = $post['id'];
            $scheda = [];
            $raw = get_post_meta($id, '_lag_scheda', true);
            if ($raw) {
                $decoded = json_decode($raw, true);
                if (is_array($decoded)) {
                    $scheda = $decoded;
                }
            }
            return [
                'categoria'   => get_post_meta($id, '_lag_categoria', true),
                'badge'       => get_post_meta($id, '_lag_badge', true),
                'titolo'      => get_the_title($id),
                'sottotitolo' => get_post_meta($id, '_lag_sottotitolo', true),
                'descrizione' => get_post_meta($id, '_lag_descrizione', true),
                'alt'         => get_post_meta($id, '_lag_alt', true),
                'immagine'    => get_post_meta($id, '_lag_immagine', true),
                'scheda'      => $scheda,
            ];
        },
    ]);
});

/* -------------------------------------------------------------------------
 * 3) Inserisce 8 schede di esempio (una sola volta)
 *    Le immagini puntano ai file gia presenti nel frontend (/images/...),
 *    cosi funziona subito. Quando carichi le TUE foto come "immagine in
 *    evidenza" del cane, il frontend usera quelle automaticamente.
 * ---------------------------------------------------------------------- */
add_action('init', function () {
    if (get_option('lag_seeded')) {
        return;
    }

    $items = [
        [
            'titolo' => 'Cucciolata Primavera 2026', 'categoria' => 'cucciolate', 'badge' => 'Cucciolata disponibile',
            'sottotitolo' => 'Cuccioli selezionati da tartufo',
            'immagine' => '/images/lagotto-romagnolo-cucciolo-tartufo-cesto.jpg',
            'alt' => 'Cucciolo di Lagotto Romagnolo bianco e marrone seduto accanto a un cesto di tartufi nel bosco',
            'descrizione' => "Cuccioli di Lagotto Romagnolo da tartufo, socializzati in famiglia e avviati al riporto e alla ricerca dell'odore.",
            'scheda' => [
                ['etichetta' => 'Disponibilità', 'valore' => 'Su prenotazione'],
                ['etichetta' => 'Genealogia', 'valore' => 'Genitori esenti displasia (HD/ED)'],
                ['etichetta' => 'Test genetici', 'valore' => 'Esente LSD & BFJE'],
                ['etichetta' => 'Attitudine', 'valore' => 'Avvio alla cerca dalle 5 settimane'],
            ],
        ],
        [
            'titolo' => 'Linea Tartufaia', 'categoria' => 'riproduttori', 'badge' => 'Riproduttore',
            'sottotitolo' => 'Selezione genetica per la cerca',
            'immagine' => '/images/cucciolo-lagotto-cioccolato-tartufi-neri.jpg',
            'alt' => 'Lagotto Romagnolo marrone cioccolato accanto a un cesto di tartufi neri nel bosco',
            'descrizione' => 'Soggetto di linea selezionata per il fiuto e la concentrazione sul lavoro: base genetica delle nostre cucciolate da tartufo.',
            'scheda' => [
                ['etichetta' => 'Mantello', 'valore' => 'Marrone (cioccolato)'],
                ['etichetta' => 'Displasia anca (HD)', 'valore' => 'Esente'],
                ['etichetta' => 'Displasia gomito (ED)', 'valore' => 'Esente'],
                ['etichetta' => 'Iscrizione', 'valore' => 'ROI / Pedigree ENCI'],
            ],
        ],
        [
            'titolo' => 'Sul campo, nel bosco', 'categoria' => 'cerca', 'badge' => 'Momenti di cerca',
            'sottotitolo' => 'Addestramento precoce alla cerca',
            'immagine' => '/images/cuccioli-lagotto-cerca-tartufo-bosco.jpg',
            'alt' => 'Sequenza di cuccioli di Lagotto Romagnolo durante la cerca del tartufo nel bosco',
            'descrizione' => 'I nostri cuccioli durante le prime esperienze di cerca: olfatto, scavo e riporto guidati in totale serenità.',
            'scheda' => [
                ['etichetta' => 'Ambiente', 'valore' => 'Bosco di collina'],
                ['etichetta' => 'Stagione', 'valore' => 'Autunno'],
                ['etichetta' => 'Lavoro', 'valore' => 'Ricerca, scavo e riporto'],
                ['etichetta' => 'Età cuccioli', 'valore' => '8–12 settimane'],
            ],
        ],
        [
            'titolo' => 'Fattrice — Mantello Bianco', 'categoria' => 'riproduttori', 'badge' => 'Fattrice',
            'sottotitolo' => 'Struttura tipica di razza',
            'immagine' => '/images/lagotto-romagnolo-bianco-adulto.jpg',
            'alt' => 'Lagotto Romagnolo adulto dal mantello bianco riccio in posizione da esposizione',
            'descrizione' => 'Soggetto adulto dalla struttura solida e dal carattere equilibrato, esempio della tipicità del Lagotto Romagnolo.',
            'scheda' => [
                ['etichetta' => 'Mantello', 'valore' => 'Bianco riccio'],
                ['etichetta' => 'Displasia (HD/ED)', 'valore' => 'Esente'],
                ['etichetta' => 'Carattere', 'valore' => 'Equilibrato, collaborativo'],
                ['etichetta' => 'Iscrizione', 'valore' => 'Pedigree ENCI'],
            ],
        ],
        [
            'titolo' => 'Energia e Olfatto', 'categoria' => 'cerca', 'badge' => 'In natura',
            'sottotitolo' => "A loro agio all'aperto",
            'immagine' => '/images/lagotto-romagnolo-prato-gioco.jpg',
            'alt' => 'Lagotto Romagnolo crema rilassato sull erba con la lingua di fuori in un prato',
            'descrizione' => "Il Lagotto dà il meglio all'aperto: instancabile, attento e sempre pronto a collaborare con l'uomo.",
            'scheda' => [
                ['etichetta' => 'Ambiente', 'valore' => 'Prato / radura'],
                ['etichetta' => 'Attitudine', 'valore' => 'Olfattiva e da riporto'],
                ['etichetta' => 'Energia', 'valore' => 'Alta, gestibile'],
            ],
        ],
        [
            'titolo' => 'Linea Roano-Marrone', 'categoria' => 'riproduttori', 'badge' => 'Riproduttore',
            'sottotitolo' => 'Tipicità e sostanza',
            'immagine' => '/images/lagotto-romagnolo-marrone-roano-campo.jpg',
            'alt' => 'Lagotto Romagnolo dal mantello marrone roano in piedi in un campo',
            'descrizione' => 'Riproduttore di sostanza e ossatura corretta, selezionato per trasmettere tipicità e salute alla discendenza.',
            'scheda' => [
                ['etichetta' => 'Mantello', 'valore' => 'Marrone roano'],
                ['etichetta' => 'Displasia (HD/ED)', 'valore' => 'Esente'],
                ['etichetta' => 'Test genetici', 'valore' => 'Esente patologie di razza'],
                ['etichetta' => 'Iscrizione', 'valore' => 'ROI / Pedigree ENCI'],
            ],
        ],
        [
            'titolo' => 'Concentrazione nel Bosco', 'categoria' => 'cerca', 'badge' => 'Momenti di cerca',
            'sottotitolo' => 'Naso a terra, testa al lavoro',
            'immagine' => '/images/lagotto-romagnolo-ritratto-bosco.jpg',
            'alt' => 'Ritratto ravvicinato di Lagotto Romagnolo marrone in un ambiente boschivo verde',
            'descrizione' => 'Lo sguardo del Lagotto sul lavoro: concentrazione, calma e quel fiuto eccezionale che lo rende il re della cerca.',
            'scheda' => [
                ['etichetta' => 'Ambiente', 'valore' => 'Bosco'],
                ['etichetta' => 'Dote', 'valore' => 'Fiuto e concentrazione'],
                ['etichetta' => 'Indole', 'valore' => 'Docile e attenta'],
            ],
        ],
        [
            'titolo' => 'Giovane Cioccolato', 'categoria' => 'riproduttori', 'badge' => 'Giovane promessa',
            'sottotitolo' => 'Il futuro della selezione',
            'immagine' => '/images/lagotto-romagnolo-cioccolato-natura.jpg',
            'alt' => 'Giovane Lagotto Romagnolo dal mantello marrone cioccolato in un ambiente naturale verde',
            'descrizione' => 'Un giovane soggetto in crescita: il nostro lavoro di selezione guarda al futuro, generazione dopo generazione.',
            'scheda' => [
                ['etichetta' => 'Mantello', 'valore' => 'Marrone cioccolato'],
                ['etichetta' => 'Fase', 'valore' => 'In crescita / valutazione'],
                ['etichetta' => 'Prospettiva', 'valore' => 'Futura riproduzione'],
            ],
        ],
    ];

    $order = 1;
    foreach ($items as $it) {
        $post_id = wp_insert_post([
            'post_type'    => 'cani',
            'post_status'  => 'publish',
            'post_title'   => $it['titolo'],
            'post_content' => $it['descrizione'],
            'menu_order'   => $order++,
        ]);
        if (!$post_id || is_wp_error($post_id)) {
            continue;
        }
        update_post_meta($post_id, '_lag_categoria',   $it['categoria']);
        update_post_meta($post_id, '_lag_badge',       $it['badge']);
        update_post_meta($post_id, '_lag_sottotitolo', $it['sottotitolo']);
        update_post_meta($post_id, '_lag_descrizione', $it['descrizione']);
        update_post_meta($post_id, '_lag_alt',         $it['alt']);
        update_post_meta($post_id, '_lag_immagine',    $it['immagine']);
        update_post_meta($post_id, '_lag_scheda',      wp_json_encode($it['scheda']));
    }

    update_option('lag_seeded', 1);
}, 20);
