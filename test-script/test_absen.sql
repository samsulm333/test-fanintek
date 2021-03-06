PGDMP     8    3        
        z         
   test_absen    13.4    13.4     ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394 
   test_absen    DATABASE     n   CREATE DATABASE test_absen WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE test_absen;
                postgres    false            ?            1259    16395    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public         heap    postgres    false            ?            1259    16443    espresences    TABLE     \  CREATE TABLE public.espresences (
    id integer NOT NULL,
    id_users integer NOT NULL,
    type character varying(255) NOT NULL,
    is_approve character varying(255),
    waktu timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.espresences;
       public         heap    postgres    false            ?            1259    16441    espresences_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.espresences_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.espresences_id_seq;
       public          postgres    false    204            ?           0    0    espresences_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.espresences_id_seq OWNED BY public.espresences.id;
          public          postgres    false    203            ?            1259    16430    users    TABLE     r  CREATE TABLE public.users (
    id integer NOT NULL,
    nama character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    npp integer NOT NULL,
    npp_supervisor integer,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16428    users_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    202            ?           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    201            1           2604    16446    espresences id    DEFAULT     p   ALTER TABLE ONLY public.espresences ALTER COLUMN id SET DEFAULT nextval('public.espresences_id_seq'::regclass);
 =   ALTER TABLE public.espresences ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203    204            .           2604    16433    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    201    202    202            ?          0    16395    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          postgres    false    200          ?          0    16443    espresences 
   TABLE DATA           f   COPY public.espresences (id, id_users, type, is_approve, waktu, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    204   S       ?          0    16430    users 
   TABLE DATA           i   COPY public.users (id, nama, email, npp, npp_supervisor, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    202   ?       ?           0    0    espresences_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.espresences_id_seq', 4, true);
          public          postgres    false    203            ?           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 5, true);
          public          postgres    false    201            5           2606    16399     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            postgres    false    200            9           2606    16453    espresences espresences_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.espresences
    ADD CONSTRAINT espresences_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.espresences DROP CONSTRAINT espresences_pkey;
       public            postgres    false    204            7           2606    16440    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    202            ?   A   x?3202202?44150??M.JM,I?--N-*??*?2?J??¥S??R?S??S??b???? ???      ?   ?   x?}л
1??:y
{???L.??,Q????'??QH5>~"A?m]?r_?A 2A&Ǝ?????g??bRi_ôW*Z|??????]?Ä)5?9S?>??8y,{?zr!?Yj
??vY]??????lnd$Ғ??7+??O?1? 5PDh      ?   ?  x?}??r?P???)\???ɹq]3?(
?(?l@????E?O?C*?&5??Ϳ???Ơ??rTGU??s??I
w?`Bp7`L?1Fc??????0?y?<S*4綎Mj?+?"?I???FK)?D??i?@!w??a4B??e?R(!??q8M???:?#?????7?????@??????&_?j???f?b4a??2?????????9k???<?ΐ??7?~ı>?t0҃?n>a?|???b?ߜ??gj;Qv?v}????D???|??D?6??1?*@$J??zG???y??4?m@?w?)|??WJ?^[???N ????????y??z~?2???[XFq????
!??????????ր$??NZ??+?j?q??u?9޾??*6?????P??̝????U?g??F?&
?
?!??u"?7?8????1     