PGDMP     5                	    x            lnhtywgf     11.5 (Ubuntu 11.5-3.pgdg18.04+1)    12.2 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5866707    lnhtywgf    DATABASE     z   CREATE DATABASE lnhtywgf WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE lnhtywgf;
                lnhtywgf    false            �           0    0    DATABASE lnhtywgf    ACL     ;   REVOKE CONNECT,TEMPORARY ON DATABASE lnhtywgf FROM PUBLIC;
                   lnhtywgf    false    4563            	            3079    17135 	   btree_gin 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;
    DROP EXTENSION btree_gin;
                   false            �           0    0    EXTENSION btree_gin    COMMENT     R   COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';
                        false    9                        3079    17676 
   btree_gist 	   EXTENSION     >   CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;
    DROP EXTENSION btree_gist;
                   false            �           0    0    EXTENSION btree_gist    COMMENT     T   COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';
                        false    5                        3079    16661    citext 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;
    DROP EXTENSION citext;
                   false            �           0    0    EXTENSION citext    COMMENT     S   COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';
                        false    16                        3079    17573    cube 	   EXTENSION     8   CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;
    DROP EXTENSION cube;
                   false            �           0    0    EXTENSION cube    COMMENT     E   COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';
                        false    7                        3079    16384    dblink 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;
    DROP EXTENSION dblink;
                   false            �           0    0    EXTENSION dblink    COMMENT     _   COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';
                        false    22            
            3079    17130    dict_int 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;
    DROP EXTENSION dict_int;
                   false            �           0    0    EXTENSION dict_int    COMMENT     Q   COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';
                        false    10                        3079    18299 	   dict_xsyn 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;
    DROP EXTENSION dict_xsyn;
                   false            �           0    0    EXTENSION dict_xsyn    COMMENT     e   COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';
                        false    4                        3079    17660    earthdistance 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;
    DROP EXTENSION earthdistance;
                   false    7            �           0    0    EXTENSION earthdistance    COMMENT     f   COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';
                        false    6                        3079    16650    fuzzystrmatch 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;
    DROP EXTENSION fuzzystrmatch;
                   false            �           0    0    EXTENSION fuzzystrmatch    COMMENT     ]   COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';
                        false    17                        3079    17007    hstore 	   EXTENSION     :   CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;
    DROP EXTENSION hstore;
                   false            �           0    0    EXTENSION hstore    COMMENT     S   COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';
                        false    11                        3079    16889    intarray 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;
    DROP EXTENSION intarray;
                   false            �           0    0    EXTENSION intarray    COMMENT     g   COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';
                        false    12                        3079    16444    ltree 	   EXTENSION     9   CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;
    DROP EXTENSION ltree;
                   false            �           0    0    EXTENSION ltree    COMMENT     Q   COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';
                        false    20                        3079    18311    pg_stat_statements 	   EXTENSION     F   CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;
 #   DROP EXTENSION pg_stat_statements;
                   false            �           0    0    EXTENSION pg_stat_statements    COMMENT     h   COMMENT ON EXTENSION pg_stat_statements IS 'track execution statistics of all SQL statements executed';
                        false    2                        3079    16812    pg_trgm 	   EXTENSION     ;   CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;
    DROP EXTENSION pg_trgm;
                   false            �           0    0    EXTENSION pg_trgm    COMMENT     e   COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';
                        false    13                        3079    16775    pgcrypto 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;
    DROP EXTENSION pgcrypto;
                   false            �           0    0    EXTENSION pgcrypto    COMMENT     <   COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';
                        false    14                        3079    17571 
   pgrowlocks 	   EXTENSION     >   CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;
    DROP EXTENSION pgrowlocks;
                   false            �           0    0    EXTENSION pgrowlocks    COMMENT     I   COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';
                        false    8                        3079    16619    pgstattuple 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;
    DROP EXTENSION pgstattuple;
                   false            �           0    0    EXTENSION pgstattuple    COMMENT     C   COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';
                        false    19                        3079    16629 	   tablefunc 	   EXTENSION     =   CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;
    DROP EXTENSION tablefunc;
                   false            �           0    0    EXTENSION tablefunc    COMMENT     `   COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';
                        false    18                        3079    18304    unaccent 	   EXTENSION     <   CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;
    DROP EXTENSION unaccent;
                   false            �           0    0    EXTENSION unaccent    COMMENT     P   COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';
                        false    3                        3079    16764 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    15                        3079    16430    xml2 	   EXTENSION     8   CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;
    DROP EXTENSION xml2;
                   false            �           0    0    EXTENSION xml2    COMMENT     8   COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';
                        false    21            �           1247    5867007    degree_4_level_enum    TYPE     q   CREATE TYPE public.degree_4_level_enum AS ENUM (
    'high-neg',
    'low-neg',
    'low-pos',
    'high-pos'
);
 &   DROP TYPE public.degree_4_level_enum;
       public          lnhtywgf    false            �           1247    5866998    degree_enum    TYPE     P   CREATE TYPE public.degree_enum AS ENUM (
    'low',
    'medium',
    'high'
);
    DROP TYPE public.degree_enum;
       public          lnhtywgf    false                       1259    5867321    applicable_sections    TABLE     �  CREATE TABLE public.applicable_sections (
    id integer NOT NULL,
    user_id integer,
    project_id integer,
    section_id integer,
    answers json,
    applicable boolean,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 '   DROP TABLE public.applicable_sections;
       public            lnhtywgf    false                       1259    5867319    applicable_sections_id_seq    SEQUENCE     �   ALTER TABLE public.applicable_sections ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.applicable_sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    280                       1259    5867347    attribute_parameters    TABLE     �  CREATE TABLE public.attribute_parameters (
    id integer NOT NULL,
    name character varying(50),
    description text,
    mandate_level_id integer,
    attribute_id integer,
    weightage integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    doc_group character varying(50),
    "order" integer
);
 (   DROP TABLE public.attribute_parameters;
       public            lnhtywgf    false                       1259    5867345    attribute_parameters_id_seq    SEQUENCE     �   ALTER TABLE public.attribute_parameters ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.attribute_parameters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    284                       1259    5867199    beneficiaries    TABLE     A  CREATE TABLE public.beneficiaries (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.beneficiaries;
       public            lnhtywgf    false                       1259    5867197    beneficiaries_id_seq    SEQUENCE     �   ALTER TABLE public.beneficiaries ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.beneficiaries_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    262                       1259    5867213    beneficiary_profiles    TABLE     d  CREATE TABLE public.beneficiary_profiles (
    id integer NOT NULL,
    name text,
    description text,
    beneficiary_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 (   DROP TABLE public.beneficiary_profiles;
       public            lnhtywgf    false                       1259    5867211    beneficiary_profiles_id_seq    SEQUENCE     �   ALTER TABLE public.beneficiary_profiles ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.beneficiary_profiles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    264            �            1259    5866986    beneficiary_segments    TABLE     h  CREATE TABLE public.beneficiary_segments (
    id integer NOT NULL,
    name character varying(50),
    description text,
    code text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 (   DROP TABLE public.beneficiary_segments;
       public            lnhtywgf    false            �            1259    5866984    beneficiary_segments_id_seq    SEQUENCE     �   ALTER TABLE public.beneficiary_segments ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.beneficiary_segments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    234            �            1259    5867067    bill_decrees    TABLE     �  CREATE TABLE public.bill_decrees (
    id integer NOT NULL,
    name text,
    doc_ref text,
    number integer,
    effective_date date,
    policy_id integer,
    ownership text,
    passed_by character varying(50),
    version integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
     DROP TABLE public.bill_decrees;
       public            lnhtywgf    false            �            1259    5867065    bill_decrees_id_seq    SEQUENCE     �   ALTER TABLE public.bill_decrees ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.bill_decrees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    244            $           1259    5867400    cases    TABLE     d  CREATE TABLE public.cases (
    id integer NOT NULL,
    user_id integer,
    attribute_id integer,
    section_id integer,
    title text,
    description text,
    beneficiary_name text,
    sla integer,
    type_id integer,
    status text DEFAULT 'open'::text,
    category_id integer,
    priority integer,
    closure_comments text,
    approver_notes text,
    aprrover_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.cases;
       public            lnhtywgf    false            #           1259    5867398    cases_id_seq    SEQUENCE     �   ALTER TABLE public.cases ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.cases_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    292            �            1259    5867017    common_values    TABLE     \  CREATE TABLE public.common_values (
    id integer NOT NULL,
    name character varying(50),
    type character varying(25),
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.common_values;
       public            lnhtywgf    false            �            1259    5867015    common_values_id_seq    SEQUENCE     �   ALTER TABLE public.common_values ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.common_values_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    236            ,           1259    6540561    extras    TABLE     w  CREATE TABLE public.extras (
    id integer NOT NULL,
    name character varying(20),
    ref_id integer,
    ref character varying(16),
    data json,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.extras;
       public            lnhtywgf    false            +           1259    6540559    extras_id_seq    SEQUENCE     �   ALTER TABLE public.extras ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.extras_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    300                       1259    5867265    object_questions    TABLE     �  CREATE TABLE public.object_questions (
    id integer NOT NULL,
    name text,
    type text,
    subobject_id integer,
    policy_id integer,
    possible_answers character varying(255)[],
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 $   DROP TABLE public.object_questions;
       public            lnhtywgf    false                       1259    5867263    object_questions_id_seq    SEQUENCE     �   ALTER TABLE public.object_questions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.object_questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    272                       1259    5867239    objects    TABLE     ;  CREATE TABLE public.objects (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.objects;
       public            lnhtywgf    false                       1259    5867237    objects_id_seq    SEQUENCE     �   ALTER TABLE public.objects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.objects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    268            �            1259    5866972    outcomes    TABLE     M  CREATE TABLE public.outcomes (
    id integer NOT NULL,
    name character varying(50),
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.outcomes;
       public            lnhtywgf    false            �            1259    5866970    outcomes_id_seq    SEQUENCE     �   ALTER TABLE public.outcomes ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.outcomes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    232            �            1259    5866944    policies    TABLE     �  CREATE TABLE public.policies (
    id integer NOT NULL,
    name character varying(50),
    description text,
    owner_id integer,
    family_id integer,
    policy_category_id integer,
    publication_date date,
    policy_status_id integer,
    policy_state_id integer,
    beneficiary_ids integer[],
    beneficiary_profile_ids integer[],
    profile_detail_ids integer[],
    object_ids integer[],
    subobject_ids integer[],
    question_ids integer[],
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    code character varying(20)
);
    DROP TABLE public.policies;
       public            lnhtywgf    false            �            1259    5866942    policies_id_seq    SEQUENCE     �   ALTER TABLE public.policies ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    228            �            1259    5867040    policy_impact_areas    TABLE     �  CREATE TABLE public.policy_impact_areas (
    id integer NOT NULL,
    outcome_id integer,
    policy_id integer,
    description text,
    beneficiary_segment_id integer,
    impact public.degree_enum,
    impact_correlation public.degree_4_level_enum,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    name character varying(40)
);
 '   DROP TABLE public.policy_impact_areas;
       public            lnhtywgf    false    1499    1502            �            1259    5867038    policy_impact_areas_id_seq    SEQUENCE     �   ALTER TABLE public.policy_impact_areas ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_impact_areas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    240            �            1259    5867130    policy_objects    TABLE     Y  CREATE TABLE public.policy_objects (
    id integer NOT NULL,
    name text,
    description text,
    policy_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 "   DROP TABLE public.policy_objects;
       public            lnhtywgf    false            �            1259    5867128    policy_objects_id_seq    SEQUENCE     �   ALTER TABLE public.policy_objects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_objects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    252                        1259    5867373    policy_op_tasks    TABLE     �  CREATE TABLE public.policy_op_tasks (
    id integer NOT NULL,
    name character varying(50),
    description text,
    role_id integer,
    application_type integer,
    "order" integer,
    policy_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 #   DROP TABLE public.policy_op_tasks;
       public            lnhtywgf    false                       1259    5867371    policy_op_tasks_id_seq    SEQUENCE     �   ALTER TABLE public.policy_op_tasks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_op_tasks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    288            �            1259    5867027    policy_outcomes    TABLE     �  CREATE TABLE public.policy_outcomes (
    id integer NOT NULL,
    outcome_id integer,
    policy_id integer,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    name character varying(40)
);
 #   DROP TABLE public.policy_outcomes;
       public            lnhtywgf    false            �            1259    5867025    policy_outcomes_id_seq    SEQUENCE     �   ALTER TABLE public.policy_outcomes ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_outcomes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    238                       1259    5867170    policy_queues    TABLE     �  CREATE TABLE public.policy_queues (
    id integer NOT NULL,
    name text,
    description text,
    sla text,
    role_id integer,
    category_id integer,
    type character varying(15),
    policy_id integer,
    status text DEFAULT 'pending'::text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.policy_queues;
       public            lnhtywgf    false                       1259    5867168    policy_queues_id_seq    SEQUENCE     �   ALTER TABLE public.policy_queues ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_queues_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    258            �            1259    5867053    policy_risks    TABLE     �  CREATE TABLE public.policy_risks (
    id integer NOT NULL,
    risk_id integer,
    policy_id integer,
    description text,
    probability public.degree_4_level_enum,
    impact public.degree_enum,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    name character varying(40)
);
     DROP TABLE public.policy_risks;
       public            lnhtywgf    false    1499    1502            �            1259    5867051    policy_risks_id_seq    SEQUENCE     �   ALTER TABLE public.policy_risks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_risks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    242                       1259    5867278    policy_sections    TABLE     �  CREATE TABLE public.policy_sections (
    id integer NOT NULL,
    name text,
    description text,
    policy_id integer,
    parent_id integer,
    tags character varying(60)[],
    risk_ids integer[],
    impact_area_ids integer[],
    benefit_ids integer[],
    outcome_ids integer[],
    impl_domain_ids integer[],
    beneficiary_ids integer[],
    beneficiary_profile_ids integer[],
    profile_detail_ids integer[],
    object_ids integer[],
    subobject_ids integer[],
    question_ids integer[],
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    "order" integer
);
 #   DROP TABLE public.policy_sections;
       public            lnhtywgf    false                       1259    5867276    policy_sections_id_seq    SEQUENCE     �   ALTER TABLE public.policy_sections ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    274            &           1259    5867415    policy_stages    TABLE     �  CREATE TABLE public.policy_stages (
    id integer NOT NULL,
    name character varying(50),
    description text,
    status text,
    policy_id integer,
    start_date date,
    end_date date,
    actual_start_date date,
    actual_end_date date,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.policy_stages;
       public            lnhtywgf    false            %           1259    5867413    policy_stages_id_seq    SEQUENCE     �   ALTER TABLE public.policy_stages ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_stages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    294            �            1259    5867143    policy_subobjects    TABLE     z  CREATE TABLE public.policy_subobjects (
    id integer NOT NULL,
    name text,
    description text,
    policy_id integer,
    policy_object_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 %   DROP TABLE public.policy_subobjects;
       public            lnhtywgf    false            �            1259    5867141    policy_subobjects_id_seq    SEQUENCE     �   ALTER TABLE public.policy_subobjects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_subobjects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    254                       1259    5867185    policy_tickets    TABLE     �  CREATE TABLE public.policy_tickets (
    id integer NOT NULL,
    purpose text,
    sla text,
    role_id integer,
    category_id integer,
    type character varying(15),
    policy_id integer,
    status text DEFAULT 'pending'::text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 "   DROP TABLE public.policy_tickets;
       public            lnhtywgf    false                       1259    5867183    policy_tickets_id_seq    SEQUENCE     �   ALTER TABLE public.policy_tickets ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_tickets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    260            �            1259    5867113    policy_triggers    TABLE     �  CREATE TABLE public.policy_triggers (
    id integer NOT NULL,
    name character varying(60),
    trigger_type_id integer,
    policy_id integer,
    notes text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 #   DROP TABLE public.policy_triggers;
       public            lnhtywgf    false            �            1259    5867111    policy_triggers_id_seq    SEQUENCE     �   ALTER TABLE public.policy_triggers ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_triggers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    250            
           1259    5867226    profile_details    TABLE     g  CREATE TABLE public.profile_details (
    id integer NOT NULL,
    name text,
    description text,
    beneficiary_profile_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 #   DROP TABLE public.profile_details;
       public            lnhtywgf    false            	           1259    5867224    profile_details_id_seq    SEQUENCE     �   ALTER TABLE public.profile_details ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.profile_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    266                       1259    5867306    project_implementation_domains    TABLE     �  CREATE TABLE public.project_implementation_domains (
    id integer NOT NULL,
    domain text,
    owner text,
    project_id integer,
    status text DEFAULT 'pending'::text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 2   DROP TABLE public.project_implementation_domains;
       public            lnhtywgf    false                       1259    5867304 %   project_implementation_domains_id_seq    SEQUENCE     �   ALTER TABLE public.project_implementation_domains ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_implementation_domains_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    278                       1259    5867334    project_section_plans    TABLE     �  CREATE TABLE public.project_section_plans (
    id integer NOT NULL,
    owner character varying(50),
    reviewer character varying(50),
    responsible character varying(50),
    target_date date,
    description text,
    project_id integer,
    section_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 )   DROP TABLE public.project_section_plans;
       public            lnhtywgf    false                       1259    5867332    project_section_plans_id_seq    SEQUENCE     �   ALTER TABLE public.project_section_plans ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_section_plans_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    282                       1259    5867292    project_stake_holders    TABLE     �  CREATE TABLE public.project_stake_holders (
    id integer NOT NULL,
    name text,
    role_id integer,
    email text,
    project_id integer,
    status text DEFAULT 'pending'::text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 )   DROP TABLE public.project_stake_holders;
       public            lnhtywgf    false                       1259    5867290    project_stake_holders_id_seq    SEQUENCE     �   ALTER TABLE public.project_stake_holders ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_stake_holders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    276            (           1259    5867429    project_tasks    TABLE     $  CREATE TABLE public.project_tasks (
    id integer NOT NULL,
    user_id integer,
    attribute_id integer,
    section_id integer,
    case_id integer,
    project_id integer,
    priority integer,
    title text,
    description text,
    status text DEFAULT 'open'::text,
    approver_notes text,
    aprrover_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.project_tasks;
       public            lnhtywgf    false            '           1259    5867427    project_tasks_id_seq    SEQUENCE     �   ALTER TABLE public.project_tasks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_tasks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    296            �            1259    5866931    projects    TABLE     �  CREATE TABLE public.projects (
    id integer NOT NULL,
    name character varying(50),
    sponsor character varying(50),
    description text,
    owner text,
    type_id integer,
    start_date date,
    end_date date,
    beneficiary_ids integer[],
    profile_ids integer[],
    object_ids integer[],
    subobject_ids integer[],
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    applied_attribute_ids integer[],
    category_id integer,
    owner_id integer
);
    DROP TABLE public.projects;
       public            lnhtywgf    false            �            1259    5866929    projects_id_seq    SEQUENCE     �   ALTER TABLE public.projects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    226            "           1259    5867386    record_parameters    TABLE     m  CREATE TABLE public.record_parameters (
    id integer NOT NULL,
    user_id integer,
    applicable_section_id integer,
    parameter_id integer,
    user_notes text,
    user_compliance_type integer,
    approver_notes text,
    approver_compliance_type integer,
    status text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    project_id integer,
    attribute_id integer,
    section_id integer,
    images json,
    approver_id integer
);
 %   DROP TABLE public.record_parameters;
       public            lnhtywgf    false            !           1259    5867384    record_parameters_id_seq    SEQUENCE     �   ALTER TABLE public.record_parameters ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.record_parameters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    290            �            1259    5866957    risks    TABLE     J  CREATE TABLE public.risks (
    id integer NOT NULL,
    name character varying(50),
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.risks;
       public            lnhtywgf    false            �            1259    5866955    risks_id_seq    SEQUENCE     �   ALTER TABLE public.risks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.risks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    230            *           1259    5867443    roles    TABLE     `  CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(50),
    description text,
    active boolean DEFAULT true,
    permissions json,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.roles;
       public            lnhtywgf    false            )           1259    5867441    roles_id_seq    SEQUENCE     �   ALTER TABLE public.roles ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    298            �            1259    5866910    schema_info    TABLE     L   CREATE TABLE public.schema_info (
    version integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.schema_info;
       public            lnhtywgf    false                       1259    5867360    section_contents    TABLE     �  CREATE TABLE public.section_contents (
    id integer NOT NULL,
    name character varying(50),
    description text,
    section_id integer,
    type text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    kb_type character varying(20),
    parameter_id integer
);
 $   DROP TABLE public.section_contents;
       public            lnhtywgf    false                       1259    5867358    section_contents_id_seq    SEQUENCE     �   ALTER TABLE public.section_contents ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.section_contents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    286                        1259    5867156    stake_holders    TABLE     �  CREATE TABLE public.stake_holders (
    id integer NOT NULL,
    name text,
    role_id integer,
    email text,
    type character varying(15),
    policy_id integer,
    status text DEFAULT 'pending'::text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.stake_holders;
       public            lnhtywgf    false            �            1259    5867154    stake_holders_id_seq    SEQUENCE     �   ALTER TABLE public.stake_holders ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.stake_holders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    256                       1259    5867252 
   subobjects    TABLE     U  CREATE TABLE public.subobjects (
    id integer NOT NULL,
    name text,
    description text,
    object_id integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.subobjects;
       public            lnhtywgf    false                       1259    5867250    subobjects_id_seq    SEQUENCE     �   ALTER TABLE public.subobjects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.subobjects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    270            �            1259    5867095    trigger_types    TABLE     A  CREATE TABLE public.trigger_types (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.trigger_types;
       public            lnhtywgf    false            �            1259    5867093    trigger_types_id_seq    SEQUENCE     �   ALTER TABLE public.trigger_types ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trigger_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    248            �            1259    5867082    triggers    TABLE     <  CREATE TABLE public.triggers (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.triggers;
       public            lnhtywgf    false            �            1259    5867080    triggers_id_seq    SEQUENCE     �   ALTER TABLE public.triggers ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.triggers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    246            �            1259    5866918    users    TABLE     �  CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying(50),
    last_name character varying(50),
    email character varying(100),
    encoded_password character varying(200),
    username character varying(25),
    role integer,
    active boolean DEFAULT true,
    "authorization" jsonb,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.users;
       public            lnhtywgf    false            �            1259    5866916    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          lnhtywgf    false    224            �          0    5867321    applicable_sections 
   TABLE DATA           �   COPY public.applicable_sections (id, user_id, project_id, section_id, answers, applicable, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    280   2E      �          0    5867347    attribute_parameters 
   TABLE DATA           �   COPY public.attribute_parameters (id, name, description, mandate_level_id, attribute_id, weightage, active, created_by, updated_by, created_at, updated_at, doc_group, "order") FROM stdin;
    public          lnhtywgf    false    284   )F      �          0    5867199    beneficiaries 
   TABLE DATA           v   COPY public.beneficiaries (id, name, description, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    262   sq      �          0    5867213    beneficiary_profiles 
   TABLE DATA           �   COPY public.beneficiary_profiles (id, name, description, beneficiary_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    264   �q      �          0    5866986    beneficiary_segments 
   TABLE DATA           �   COPY public.beneficiary_segments (id, name, description, code, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    234   $t      �          0    5867067    bill_decrees 
   TABLE DATA           �   COPY public.bill_decrees (id, name, doc_ref, number, effective_date, policy_id, ownership, passed_by, version, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    244   At      �          0    5867400    cases 
   TABLE DATA              COPY public.cases (id, user_id, attribute_id, section_id, title, description, beneficiary_name, sla, type_id, status, category_id, priority, closure_comments, approver_notes, aprrover_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    292   �t      �          0    5867017    common_values 
   TABLE DATA           o   COPY public.common_values (id, name, type, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    236   �u      �          0    6540561    extras 
   TABLE DATA           u   COPY public.extras (id, name, ref_id, ref, data, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    300   �u      �          0    5867265    object_questions 
   TABLE DATA           �   COPY public.object_questions (id, name, type, subobject_id, policy_id, possible_answers, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    272   v      �          0    5867239    objects 
   TABLE DATA           p   COPY public.objects (id, name, description, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    268   
z      �          0    5866972    outcomes 
   TABLE DATA           q   COPY public.outcomes (id, name, description, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    232   �z      �          0    5866944    policies 
   TABLE DATA           <  COPY public.policies (id, name, description, owner_id, family_id, policy_category_id, publication_date, policy_status_id, policy_state_id, beneficiary_ids, beneficiary_profile_ids, profile_detail_ids, object_ids, subobject_ids, question_ids, active, created_by, updated_by, created_at, updated_at, code) FROM stdin;
    public          lnhtywgf    false    228   �z      �          0    5867040    policy_impact_areas 
   TABLE DATA           �   COPY public.policy_impact_areas (id, outcome_id, policy_id, description, beneficiary_segment_id, impact, impact_correlation, active, created_by, updated_by, created_at, updated_at, name) FROM stdin;
    public          lnhtywgf    false    240   R|      �          0    5867130    policy_objects 
   TABLE DATA           �   COPY public.policy_objects (id, name, description, policy_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    252   �}      �          0    5867373    policy_op_tasks 
   TABLE DATA           �   COPY public.policy_op_tasks (id, name, description, role_id, application_type, "order", policy_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    288   �}      �          0    5867027    policy_outcomes 
   TABLE DATA           �   COPY public.policy_outcomes (id, outcome_id, policy_id, description, active, created_by, updated_by, created_at, updated_at, name) FROM stdin;
    public          lnhtywgf    false    238   �~      �          0    5867170    policy_queues 
   TABLE DATA           �   COPY public.policy_queues (id, name, description, sla, role_id, category_id, type, policy_id, status, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    258   ��      �          0    5867053    policy_risks 
   TABLE DATA           �   COPY public.policy_risks (id, risk_id, policy_id, description, probability, impact, active, created_by, updated_by, created_at, updated_at, name) FROM stdin;
    public          lnhtywgf    false    242   ́      �          0    5867278    policy_sections 
   TABLE DATA           J  COPY public.policy_sections (id, name, description, policy_id, parent_id, tags, risk_ids, impact_area_ids, benefit_ids, outcome_ids, impl_domain_ids, beneficiary_ids, beneficiary_profile_ids, profile_detail_ids, object_ids, subobject_ids, question_ids, active, created_by, updated_by, created_at, updated_at, "order") FROM stdin;
    public          lnhtywgf    false    274   ��      �          0    5867415    policy_stages 
   TABLE DATA           �   COPY public.policy_stages (id, name, description, status, policy_id, start_date, end_date, actual_start_date, actual_end_date, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    294   ��      �          0    5867143    policy_subobjects 
   TABLE DATA           �   COPY public.policy_subobjects (id, name, description, policy_id, policy_object_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    254   ե      �          0    5867185    policy_tickets 
   TABLE DATA           �   COPY public.policy_tickets (id, purpose, sla, role_id, category_id, type, policy_id, status, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    260   �      �          0    5867113    policy_triggers 
   TABLE DATA           �   COPY public.policy_triggers (id, name, trigger_type_id, policy_id, notes, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    250   �      �          0    5867226    profile_details 
   TABLE DATA           �   COPY public.profile_details (id, name, description, beneficiary_profile_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    266   n�      �          0    5867306    project_implementation_domains 
   TABLE DATA           �   COPY public.project_implementation_domains (id, domain, owner, project_id, status, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    278   E�      �          0    5867334    project_section_plans 
   TABLE DATA           �   COPY public.project_section_plans (id, owner, reviewer, responsible, target_date, description, project_id, section_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    282   b�      �          0    5867292    project_stake_holders 
   TABLE DATA           �   COPY public.project_stake_holders (id, name, role_id, email, project_id, status, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    276   >�      �          0    5867429    project_tasks 
   TABLE DATA           �   COPY public.project_tasks (id, user_id, attribute_id, section_id, case_id, project_id, priority, title, description, status, approver_notes, aprrover_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    296   [�      �          0    5866931    projects 
   TABLE DATA             COPY public.projects (id, name, sponsor, description, owner, type_id, start_date, end_date, beneficiary_ids, profile_ids, object_ids, subobject_ids, active, created_by, updated_by, created_at, updated_at, applied_attribute_ids, category_id, owner_id) FROM stdin;
    public          lnhtywgf    false    226   x�      �          0    5867386    record_parameters 
   TABLE DATA           $  COPY public.record_parameters (id, user_id, applicable_section_id, parameter_id, user_notes, user_compliance_type, approver_notes, approver_compliance_type, status, active, created_by, updated_by, created_at, updated_at, project_id, attribute_id, section_id, images, approver_id) FROM stdin;
    public          lnhtywgf    false    290   ��      �          0    5866957    risks 
   TABLE DATA           n   COPY public.risks (id, name, description, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    230   F      �          0    5867443    roles 
   TABLE DATA           {   COPY public.roles (id, name, description, active, permissions, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    298   c                0    5866910    schema_info 
   TABLE DATA           .   COPY public.schema_info (version) FROM stdin;
    public          lnhtywgf    false    222   	      �          0    5867360    section_contents 
   TABLE DATA           �   COPY public.section_contents (id, name, description, section_id, type, active, created_by, updated_by, created_at, updated_at, kb_type, parameter_id) FROM stdin;
    public          lnhtywgf    false    286   <	      �          0    5867156    stake_holders 
   TABLE DATA           �   COPY public.stake_holders (id, name, role_id, email, type, policy_id, status, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    256   ��      �          0    5867252 
   subobjects 
   TABLE DATA           ~   COPY public.subobjects (id, name, description, object_id, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    270   �      �          0    5867095    trigger_types 
   TABLE DATA           v   COPY public.trigger_types (id, name, description, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    248   ��      �          0    5867082    triggers 
   TABLE DATA           q   COPY public.triggers (id, name, description, active, created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    246   ��      �          0    5866918    users 
   TABLE DATA           �   COPY public.users (id, first_name, last_name, email, encoded_password, username, role, active, "authorization", created_by, updated_by, created_at, updated_at) FROM stdin;
    public          lnhtywgf    false    224   ׷      �           0    0    applicable_sections_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.applicable_sections_id_seq', 2, true);
          public          lnhtywgf    false    279            �           0    0    attribute_parameters_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.attribute_parameters_id_seq', 466, true);
          public          lnhtywgf    false    283            �           0    0    beneficiaries_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.beneficiaries_id_seq', 1, false);
          public          lnhtywgf    false    261            �           0    0    beneficiary_profiles_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.beneficiary_profiles_id_seq', 1, false);
          public          lnhtywgf    false    263            �           0    0    beneficiary_segments_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.beneficiary_segments_id_seq', 1, false);
          public          lnhtywgf    false    233            �           0    0    bill_decrees_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.bill_decrees_id_seq', 1, true);
          public          lnhtywgf    false    243            �           0    0    cases_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.cases_id_seq', 4, true);
          public          lnhtywgf    false    291            �           0    0    common_values_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.common_values_id_seq', 1, false);
          public          lnhtywgf    false    235            �           0    0    extras_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.extras_id_seq', 1, false);
          public          lnhtywgf    false    299            �           0    0    object_questions_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.object_questions_id_seq', 2, true);
          public          lnhtywgf    false    271            �           0    0    objects_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.objects_id_seq', 1, false);
          public          lnhtywgf    false    267            �           0    0    outcomes_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.outcomes_id_seq', 1, false);
          public          lnhtywgf    false    231            �           0    0    policies_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.policies_id_seq', 4, true);
          public          lnhtywgf    false    227            �           0    0    policy_impact_areas_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.policy_impact_areas_id_seq', 5, true);
          public          lnhtywgf    false    239            �           0    0    policy_objects_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.policy_objects_id_seq', 1, false);
          public          lnhtywgf    false    251            �           0    0    policy_op_tasks_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.policy_op_tasks_id_seq', 4, true);
          public          lnhtywgf    false    287            �           0    0    policy_outcomes_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.policy_outcomes_id_seq', 11, true);
          public          lnhtywgf    false    237            �           0    0    policy_queues_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.policy_queues_id_seq', 4, true);
          public          lnhtywgf    false    257            �           0    0    policy_risks_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.policy_risks_id_seq', 13, true);
          public          lnhtywgf    false    241            �           0    0    policy_sections_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.policy_sections_id_seq', 192, true);
          public          lnhtywgf    false    273            �           0    0    policy_stages_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.policy_stages_id_seq', 1, false);
          public          lnhtywgf    false    293            �           0    0    policy_subobjects_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.policy_subobjects_id_seq', 1, false);
          public          lnhtywgf    false    253                        0    0    policy_tickets_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.policy_tickets_id_seq', 5, true);
          public          lnhtywgf    false    259                       0    0    policy_triggers_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.policy_triggers_id_seq', 1, true);
          public          lnhtywgf    false    249                       0    0    profile_details_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.profile_details_id_seq', 1, false);
          public          lnhtywgf    false    265                       0    0 %   project_implementation_domains_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public.project_implementation_domains_id_seq', 1, false);
          public          lnhtywgf    false    277                       0    0    project_section_plans_id_seq    SEQUENCE SET     J   SELECT pg_catalog.setval('public.project_section_plans_id_seq', 7, true);
          public          lnhtywgf    false    281                       0    0    project_stake_holders_id_seq    SEQUENCE SET     K   SELECT pg_catalog.setval('public.project_stake_holders_id_seq', 1, false);
          public          lnhtywgf    false    275                       0    0    project_tasks_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.project_tasks_id_seq', 1, false);
          public          lnhtywgf    false    295                       0    0    projects_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.projects_id_seq', 18, true);
          public          lnhtywgf    false    225                       0    0    record_parameters_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.record_parameters_id_seq', 1389, true);
          public          lnhtywgf    false    289            	           0    0    risks_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.risks_id_seq', 1, false);
          public          lnhtywgf    false    229            
           0    0    roles_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.roles_id_seq', 1, false);
          public          lnhtywgf    false    297                       0    0    section_contents_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.section_contents_id_seq', 535, true);
          public          lnhtywgf    false    285                       0    0    stake_holders_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.stake_holders_id_seq', 5, true);
          public          lnhtywgf    false    255                       0    0    subobjects_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.subobjects_id_seq', 1, false);
          public          lnhtywgf    false    269                       0    0    trigger_types_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.trigger_types_id_seq', 1, false);
          public          lnhtywgf    false    247                       0    0    triggers_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.triggers_id_seq', 1, false);
          public          lnhtywgf    false    245                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 13, true);
          public          lnhtywgf    false    223            �           2606    5867331 ,   applicable_sections applicable_sections_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.applicable_sections
    ADD CONSTRAINT applicable_sections_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.applicable_sections DROP CONSTRAINT applicable_sections_pkey;
       public            lnhtywgf    false    280            �           2606    5867357 .   attribute_parameters attribute_parameters_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.attribute_parameters
    ADD CONSTRAINT attribute_parameters_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.attribute_parameters DROP CONSTRAINT attribute_parameters_pkey;
       public            lnhtywgf    false    284            �           2606    5867209     beneficiaries beneficiaries_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.beneficiaries
    ADD CONSTRAINT beneficiaries_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.beneficiaries DROP CONSTRAINT beneficiaries_pkey;
       public            lnhtywgf    false    262            �           2606    5867223 .   beneficiary_profiles beneficiary_profiles_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.beneficiary_profiles
    ADD CONSTRAINT beneficiary_profiles_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.beneficiary_profiles DROP CONSTRAINT beneficiary_profiles_pkey;
       public            lnhtywgf    false    264            �           2606    5866996 .   beneficiary_segments beneficiary_segments_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.beneficiary_segments
    ADD CONSTRAINT beneficiary_segments_pkey PRIMARY KEY (id);
 X   ALTER TABLE ONLY public.beneficiary_segments DROP CONSTRAINT beneficiary_segments_pkey;
       public            lnhtywgf    false    234            �           2606    5867077    bill_decrees bill_decrees_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.bill_decrees
    ADD CONSTRAINT bill_decrees_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.bill_decrees DROP CONSTRAINT bill_decrees_pkey;
       public            lnhtywgf    false    244            �           2606    5867411    cases cases_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.cases
    ADD CONSTRAINT cases_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.cases DROP CONSTRAINT cases_pkey;
       public            lnhtywgf    false    292            �           2606    5867024     common_values common_values_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.common_values
    ADD CONSTRAINT common_values_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.common_values DROP CONSTRAINT common_values_pkey;
       public            lnhtywgf    false    236                       2606    6540571    extras extras_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.extras
    ADD CONSTRAINT extras_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.extras DROP CONSTRAINT extras_pkey;
       public            lnhtywgf    false    300            �           2606    5867275 &   object_questions object_questions_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.object_questions
    ADD CONSTRAINT object_questions_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.object_questions DROP CONSTRAINT object_questions_pkey;
       public            lnhtywgf    false    272            �           2606    5867249    objects objects_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.objects
    ADD CONSTRAINT objects_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.objects DROP CONSTRAINT objects_pkey;
       public            lnhtywgf    false    268            �           2606    5866982    outcomes outcomes_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.outcomes
    ADD CONSTRAINT outcomes_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.outcomes DROP CONSTRAINT outcomes_pkey;
       public            lnhtywgf    false    232            �           2606    5866954    policies policies_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.policies
    ADD CONSTRAINT policies_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.policies DROP CONSTRAINT policies_pkey;
       public            lnhtywgf    false    228            �           2606    5867050 ,   policy_impact_areas policy_impact_areas_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.policy_impact_areas
    ADD CONSTRAINT policy_impact_areas_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.policy_impact_areas DROP CONSTRAINT policy_impact_areas_pkey;
       public            lnhtywgf    false    240            �           2606    5867140 "   policy_objects policy_objects_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.policy_objects
    ADD CONSTRAINT policy_objects_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.policy_objects DROP CONSTRAINT policy_objects_pkey;
       public            lnhtywgf    false    252            �           2606    5867383 $   policy_op_tasks policy_op_tasks_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.policy_op_tasks
    ADD CONSTRAINT policy_op_tasks_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.policy_op_tasks DROP CONSTRAINT policy_op_tasks_pkey;
       public            lnhtywgf    false    288            �           2606    5867037 $   policy_outcomes policy_outcomes_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.policy_outcomes
    ADD CONSTRAINT policy_outcomes_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.policy_outcomes DROP CONSTRAINT policy_outcomes_pkey;
       public            lnhtywgf    false    238            �           2606    5867181     policy_queues policy_queues_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.policy_queues
    ADD CONSTRAINT policy_queues_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.policy_queues DROP CONSTRAINT policy_queues_pkey;
       public            lnhtywgf    false    258            �           2606    5867063    policy_risks policy_risks_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.policy_risks
    ADD CONSTRAINT policy_risks_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.policy_risks DROP CONSTRAINT policy_risks_pkey;
       public            lnhtywgf    false    242            �           2606    5867288 $   policy_sections policy_sections_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.policy_sections
    ADD CONSTRAINT policy_sections_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.policy_sections DROP CONSTRAINT policy_sections_pkey;
       public            lnhtywgf    false    274            �           2606    5867425     policy_stages policy_stages_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.policy_stages
    ADD CONSTRAINT policy_stages_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.policy_stages DROP CONSTRAINT policy_stages_pkey;
       public            lnhtywgf    false    294            �           2606    5867153 (   policy_subobjects policy_subobjects_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.policy_subobjects
    ADD CONSTRAINT policy_subobjects_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.policy_subobjects DROP CONSTRAINT policy_subobjects_pkey;
       public            lnhtywgf    false    254            �           2606    5867196 "   policy_tickets policy_tickets_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.policy_tickets
    ADD CONSTRAINT policy_tickets_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.policy_tickets DROP CONSTRAINT policy_tickets_pkey;
       public            lnhtywgf    false    260            �           2606    5867123 $   policy_triggers policy_triggers_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.policy_triggers
    ADD CONSTRAINT policy_triggers_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.policy_triggers DROP CONSTRAINT policy_triggers_pkey;
       public            lnhtywgf    false    250            �           2606    5867236 $   profile_details profile_details_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.profile_details
    ADD CONSTRAINT profile_details_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.profile_details DROP CONSTRAINT profile_details_pkey;
       public            lnhtywgf    false    266            �           2606    5867317 B   project_implementation_domains project_implementation_domains_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.project_implementation_domains
    ADD CONSTRAINT project_implementation_domains_pkey PRIMARY KEY (id);
 l   ALTER TABLE ONLY public.project_implementation_domains DROP CONSTRAINT project_implementation_domains_pkey;
       public            lnhtywgf    false    278            �           2606    5867344 0   project_section_plans project_section_plans_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.project_section_plans
    ADD CONSTRAINT project_section_plans_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.project_section_plans DROP CONSTRAINT project_section_plans_pkey;
       public            lnhtywgf    false    282            �           2606    5867303 0   project_stake_holders project_stake_holders_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.project_stake_holders
    ADD CONSTRAINT project_stake_holders_pkey PRIMARY KEY (id);
 Z   ALTER TABLE ONLY public.project_stake_holders DROP CONSTRAINT project_stake_holders_pkey;
       public            lnhtywgf    false    276                        2606    5867440     project_tasks project_tasks_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.project_tasks
    ADD CONSTRAINT project_tasks_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.project_tasks DROP CONSTRAINT project_tasks_pkey;
       public            lnhtywgf    false    296            �           2606    5866941    projects projects_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            lnhtywgf    false    226            �           2606    5867396 (   record_parameters record_parameters_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.record_parameters
    ADD CONSTRAINT record_parameters_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.record_parameters DROP CONSTRAINT record_parameters_pkey;
       public            lnhtywgf    false    290            �           2606    5866967    risks risks_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.risks
    ADD CONSTRAINT risks_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.risks DROP CONSTRAINT risks_pkey;
       public            lnhtywgf    false    230                       2606    5867453    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            lnhtywgf    false    298            �           2606    5867370 &   section_contents section_contents_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.section_contents
    ADD CONSTRAINT section_contents_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.section_contents DROP CONSTRAINT section_contents_pkey;
       public            lnhtywgf    false    286            �           2606    5867167     stake_holders stake_holders_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.stake_holders
    ADD CONSTRAINT stake_holders_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.stake_holders DROP CONSTRAINT stake_holders_pkey;
       public            lnhtywgf    false    256            �           2606    5867262    subobjects subobjects_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.subobjects
    ADD CONSTRAINT subobjects_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.subobjects DROP CONSTRAINT subobjects_pkey;
       public            lnhtywgf    false    270            �           2606    5867105     trigger_types trigger_types_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.trigger_types
    ADD CONSTRAINT trigger_types_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.trigger_types DROP CONSTRAINT trigger_types_pkey;
       public            lnhtywgf    false    248            �           2606    5867092    triggers triggers_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.triggers
    ADD CONSTRAINT triggers_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.triggers DROP CONSTRAINT triggers_pkey;
       public            lnhtywgf    false    246            �           2606    5866928    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            lnhtywgf    false    224            �   �   x���;n�0Dњ\��:8����ހۤ���	�=�h�R���)���oҒ~޿�[�&�٫x!+��Ҕ�RDA�A�Q�Q�Q�Q�Q�I3i&ͤ�4�f�L��ڵey�#|׃u��|�әv��,�t��İs���qg���s�-�+�-؞�^����\�3ǦkO��?\��ݡ;�h��E�C����l{]j=�G]k��'Oy\0�U�~�v�⭋1��H      �      x��}[��8��3�W�i�<�/��K����^��sbc^h]�c����n��LPUB��j':��_��$2y�՟�V���bӯw������}�i�]��֟�������v���	�Of�)X��W�5�	ϲ��a�/~T�~���Ͱò@0�|^0���QJ�s�Q��^�7-
+,+��	��J��;m��Aw���\�hS����2����FZ��b��z5ܵ��^�I�=��
DȆ3oY��:��+�����-��a9�cJ�t��w���u�����+�)�Q2	pV=��n�M��Q���Ԃ�+�e�b��C�h?�����������w�1���H$[��U��-9�Y�J4�Ja��&P$XV�6�j���\&Y\q�8kOO�"�
.�˗Z^	�x������$k�k8�5n:����o�+ت�[O�+�㼞�uE�L���p�O!�g��3��P$�V/�o�e�?]�q�|V:�6X��4�*E�]�
�D�y��X:lq�p���9(��O߇z�}�u��- NQQxʕ������}�����v�qO�F��*P�$�«���f����fU_,^_	�0��9(" ��u����v�n���P�&@���	��r)�|���!��7�j�.��O��>�N�,D�+���B�T��L�BD��h��z�(��@���7=X�x�ӵ'!`�����~?l{�
��5�WZ7�K6Y�!l��]���؉A권¼��$�}n�Jl�"$\�|����s���~��힂��PF�G2F_�!�W�ƻ����~��R�J�FIg&4"$�!Y���?����V�z,(��G����a�]�Y���)��vxp��䂈"\ep׮/��U��OQ�@�k7��E��GKs�ӛ�@D��~떗�f�m�a��Y�+i�.�;���"��[��X̻C ����;QA1DX�b�n���+�@!�
Y�+��$O<�"Le�]�@Z�H���>9�"D<%�}�6�zP�E_���#-�p����!PLE�կ�aW�E��5�A�m�f�H��@���^��r�����T#�r.�-�Ų��.��⊱��'��@D������onwK>�0�D "]Wo��wC���׋�c��9-�+�@D>�aѷK�N�}{8�e<�)�^c1B���a8���/_�q��8��Ӎ�^O�u�~zy��>��"CN��Ҫ�b#!�D���z�\�ơ�������"�SWw���U���)n��{̡,!�6�� B�U������3���4�Bu�!�}�5L� B���~��tv~���F�D&sZӅx"�S���Hd]�-����,�R݉��u�p(��A B��>t�����<�>��ItW�z5|_-���W"G���Ike�Sp�����o�s�j1���j�ᒐRz��^��'�ϯ8(g��u�AD��~Y�,���ݴ��EQ�G�G�@��p/JZMh�P��a�O�n�m�����o����-T柸����(�����m�����[�Q�y��_)��ر��L���`�t3��_&{�2�hg\z�&P��C����W�y�r[_�@��5���A�is��3�X>~νb�~$P$?h�]��_.���M!����ˉ7�
c|�X���
�܍�OB�)<��A_��o��D<�_���~�n�|�v��Clz[w�����@��g����U�;��a�,��r���)e''�b�z�Y���
_��|T�sV6�+�x�	����ݦ�B����b��"$�b�)݉'ł�j+��#CG��Ux �pO\h'H����nj,��6��ZT/�u��7���O�R�ޱ`��r��;0�`w�
���n��f��RS	e�L)���	���w\�ݰ�B`��U.%���m��6q�h}� ��#��,$����[j=�\�XhX�~u/\(��p&��D��8���&��J�CrN���7�M�A)���ӹ�
}E���m���|�*3�~�m���~���-��ï�)ɹJO��R�Ջ�.�z=��]�f<�����d'g�@T+������8�6,�[�ᲅ �_&�=����n}�n�m�bX^.A]..]��¡�s.�$�|8��Ot=�����v����tpH�����=�G�4ZqE�F
�r�<9祔���i����S�=���)8��]���b�Z6�Q���}�b٘�����L����#P��W9(�.�����f�æsWl��*f�Q�s��9(v9�q݂e�j�eّS���(D�F9���AT���O���^� p�����Yl)D	�s6`^�|d&��n�ۂ���L��	�p&�CT>��a7`���]_� ���:�U�(�&b(>�H�u{�/�X��\�>��⮸o��z�5b(N�dG*�`0�Y���ۗ�	y:R5�
)&�)�b:�L͘��|c�u>Ų�ٚ�t������ɞ��X��ʵ��}��(���Ƨ��"�A��`�o�X߂q�9�NԳ�$�(����8�A({�%������SӀh��A�'p��Mw�Y�y�p�7^�w���b>����6�"�R�B�g39P���$�_ B���l�9'^��+�ٌ�#D	��q�c�<�mH��?_H'd̀��қ2F(5~�]q(%'�A��a<Q��}�݃J܂�t}�_�C3\�-69B��CRS�	at_L<Mā��x&����Tl��_�G����Qٖ�9҃r4�M>NQ7G�*��s��]d�ʉގ!*�W���1~�m}�m�aǖ�v��_%8���1o'kB �I��m��ׅ�#C@�Ui��|�*>���ɷ�~m��Q%��75A��������8B���^w�n�
�Pe\N��B`Z�㚙� �rQc�㿆�H}�ٺ	́��{�`&��@q�
h�Ŧ�V��p�]L@:0�\�B14r� ���)U�9
�5��k��x�)��~�ۃ�����0�q��e�s�$&�P��U��������ٳ��n�_�&}V�m�]Ъ@��)\����-�ܝ2����G�ᕿ~wN�4O.X��N�˞ظ_��)�Ǜv[�Q�)�K'��U�N�M�4x�����������z)S�9f��)t���BD����F��>����T��ir���4E)�(�Q�]��C�����D%��򼋜���Ɯ�25�	D��C�E�ccH�G��d��nb��eaeXc>e�CИ}^a
mPXq5�a(>#n�����]ߖ���4�VL[��G_��o6�1B1�/w���^o�o�X��"�U��/g�f��ö��:�	�*���o[i�)��P��I�&==���d�}�R���$�O��4�C�{��~�vm�k�ΎDsA
�4��\�Jh_}\�P\ϗp�a��{5��r�բ�����K���?�oө�J r����s�~�r��=�T�A�`�e!J�c���䟲ݕ�tL�L���E�|�d�鱚1D�0,�ۧO�?����ׅ��a�M#&Q� �KV�l6 ���l�*��T�������^�����Qc`������S�{e�X7h$f!*_��7
F���<f��~b(�R1�w�S,��bV\r�^���}Jh���t�Q�Ip�&H��5�*�?��W;SLN�DŒ=>_�剁��5��ɞ�|��k��֤j�@d��o��i_�g��<�p*d�9�#镓��#�����e=�b.�DN`���Lkd
�JCT���=�\�[.��v��%e�N�A��`u�֩�"�%������K{��_c�X8y�zC+?S��נ!��� G�cTWGɡ�6CFP�#A(0w�U�6�wǦ��R�=�E�v'-K���́F�fg-0��µ�4��d �±�Ch^����]���+;����ME�F�X\	w���f0����y`S�ȝ�
���m�@1P�|�?���5�2�qtܔl��I}
я#�?��� �Uб�j���M�����#�^N6lQ:�[�j��aq3��ED��������^��^!P�qt��ier�*#lD�u� ����f��=<
^w��Xo    Ϩ�s����Z��6Ʀ��@�s���P�/OK6�.�K�S�H��e]��[�����~u=|/�_��y�VBd!J��e��v��A�o���Mѿ�;'�9G���MT+�(5lxׯv���;�L^2)'b�2���K�?�!� t����D�48�T�4(�(u|x�O�(�:��0;�xg���<��� <�{�o�R��#�z�v�M$�([=��ց��-�@N�Ex�=c|�Ab�p��X4\�L��!#T0z.m������.�K�څ?j��"�W?���4�m�d"	��i3������P��/��Ŏ5�j�^s�8Fa��r% r�Vh��F+V+'y���Q����%��،?ֻ�㻗3p:�䓅������e�KO�x�1c�D}(��נ*��˲��l���h��%?���A]�̓w���y PL�V��L����3W�S���2����db�n������!����n>�da@ނ�:Y����W/��ki��iѡy+S���ы�����u�Ţ_�:��n,�/�0a��=8V�c���ZM�"�bB��c�N@�~�y9�bJ��H��`�<����J���L�����U)�%9.���ЂvI�#	�Yٳ|�����o�v�ӌ��O�c���!���7�Rϱ@s!|�#���[�}�\Un��i��|�.�Fm���a��m�63���[5�
��U}����P��L0?��΃ÅeS?�b�Xw�-Օ6m����yf3>�g&�B���h0F�C!|�3-�܇		jں�wZ
�Tl��n��U�06���[������Y�h�<F�f����.1�qYmw��=IDa�'�~a�C1y��/���?�חQ��6��J�hm�O�3�b*��` _~���yh��Ld	�}���(wnsH�]�%�:�B�B���C��������x��s!�\���;��6���̹T<�b���CB��[ �f�E��E�X��K�7?�w�h���|.��l>=M}I���?.�'�F�����=��(|D5�n��hHV���t�/ߊ���l�]n9���,�b�X�Ed�D���87�����i.��3Qv�ώ�i�i��l��9D���~L����kf���C1��Rx?�]��M�n����e��煛���L��	x���%\����I���A1���C�/�u���v�.��^���n���D�����)Շ�<=�'�<	rGB�>�X>� �&i��B��H�F��x�D=x�p[�;,�>zL�I�E�վ�0GC�FyŜ�A��dX���K�X��1һu
Q2�H��o�����+,tɱQ�U��IS������]��U�p�5/]�f�RZ׌N!���!L��U�+����PXԣ�&�����M���k�c�|�,�Y*,VYeҽI �@���75������ZO�e`@�bٞ1(� .0�~��D`]`���߆%��K�8��q`m��r�%����oO�KogX!�����]�ł���/�9Nb���y� �m�T�脆�9H�`P��
�(>����Evr�b��4���Jf!�A��\_� ̠�S)��q���d�rُ��]}�_h�g�h��bL� ��x6w�jX7��	s�{2��sepP��j�/��2t(���0��(� U]���iY�����4I�B��M����R\3�L(�3��πS�2���3����<:[cH�q
E��eq̼��3�h;-��6�"c8�)z)�2f̄I�L"K��^����O���$�b�x�gL�ɱP��9��b����E7J��-x �� �(+��BI���4�q�Ͱ\��3%L���]3e��A	��_3�o�R������+u�Ի�^��n��2Q	�<*]�ڭ�M�����_.��b�BWn�]�0�B	k���AY��h&� �wa:$�z
�1]�����.g��kU� ��}�~�B�r"8g�ck�D��Eq�g��c+�y"�a�!�e�9���O���mi��,2jՄ�ßS
>^�3'�bw�,�p��(ŝ�A�6�ѕ��}���4X��;2��bq�[wo�IȀ.�^I3C�Ed�Ú`�ᐤw�	M[��vrrfb��>��mK'"��� F����[���A � ��3r�N��bK�>���@��C`c�eN�KF�بQ3�Ĝ��|S���?�޷?
�I$4���I,^*ʟBt�!�Ea
v��7g��N��CN�O�	V���"�
:�5
S���T9Q�1�ЙҢK�`}a.�Dm�PL�<����E��N�z#&'����e�8�89�����q����f诱&xE9��y�l��<!��AQ�����W��O��`wE8 DSu�B��~����F��O(���%S��PLA�"|�[X��G�`� o㰄	>9�13����X����sP��r�e>��A �H�p$�{�Ģu�fQ:�D��j��=��P,�T�����]b����Jؼ��%L�&b(&`ϝ*��6�SB(��b�����b>yנц�A�Q�#�b�����'�K숇��֦�	������3��G�2(k�I?�b2�	��g��a���s�b>�q�30��I�S�H��B?nƼ���C
Xz��IU��9x�=e�4�	�\*3�$D�3U�I�Jb��Ja�7�BT�yĬy13l�^��ֳ޺TS�R���6��2�gh!J�=r���@�QVH����l�%�/�8�c�J�K6C�.p#�S��ǌ�?�E�'D+�l��\����O��`&��*���H *^�=|^��G�a��.Q��2H�;��򞍖4�BT�:k������9���p}����q�Ö���S��6�C/f�3�37>�+iD�1BY�K�������`�:Ѕ*1D�\2�^�L��iT���O�g�@��d�sױ'�	�.�CR¸�����y��B �$k�43�% Μ���Ol��\�[�X�D��3��gW ?�[����R�2Џ�{�#	��A��w�IͳP�BU�ޖdL�j~P��c����.��/o~w��P�f�l�=�4��1;� 1���<~�{�H,�3����Bt'���g���%��K�>�f�����}�n8u]k��)cX����ֳ\4xs�VAN!�E��ޜ9�;��}�0G�Ҵe�P
�{׵���MR��#!�fv��,Dh�ȿ8t��k7�\�� O�f��;��!� ��U�����8��M��e��x�?����p�����z�)
�l�K�ڽ�\�����=��\���vW��!�]r�ׅ�BX�'�>���e�dq���!Fn1w5��DY�K'~�D����äae��O�)�l�1�Y�oW�1�F2���E�,�cgi(p?4i�1AR&t�v����%�Qj�C�T��P��>�}�����F���rM_�R(�� ��_*��oEj�$P*��[���?�5-�	y(��9(a��|u{�)��)
7��i%)�J�c_i�K( ��-p�%�t� �[���(Zw�y�����'d�A3�Vx��JɌ��H��(��dg�P*]U��a@dآw]�ݟ�A.Ch��")}�tP�&?��$�sv�d��PJ \�nX/���Ko�_|�	�ݞ=<1AR&���C��y�,�Kq��	Qs��M}/� G*'L��x�(�ͦ3���"�]l|���#5�(q����"`C0���H�)�(�(?��!���õ$>���@��/f���\_�eo�?��T��o� ��	���E��"��z�&Kp�|S�z��rz	$f$Zg��8p1DI<
*�yi�~^�ܶ�w\��V�3&��9(�_�5��,��¬
nJ.��c(�a/21p)�3N������B�R��z~���K2�f��r.�$&�@���C��û���J�fz��0�
��'A���/ӹAģ�0��c�xI����~���Ǵf��]w��"8�l���$,gڥ_�@)�x�֋��[�pu�c+ �0��]� D�X[ 0  �����J->=�Ԏ����B�4��@�R`������60��l!��8G����>޵K0k��8���Z-�|?�E�1���؄KE\8iآd��r*�d���B��J萾;`����⚢�I���0�y��G�<D��xcwq���~!PLBV���e�!���f�=�኉K%�?S��d�������P�LaWg �a�,���xD���ßǒu�|��������Gp��eÍ�|�#6p��x�'���cZ{�FtK�p�l�7aF�F�V*��bɮ�X:����	��� m�����X0V���Ń��_C���JF��"����y��p��c�.�sP,�W������ k0��rP,^T/��כ�M�u�DY�̼!��zl6)����!b �	�t������l� E��
#�C�@���p���.]�z�#&� B�|}���p4Vrr b��7���a7�{��l�u��X6kTZA�@�F�G�ۻ~��5������MR�\ܑˇ��!����o��;5�*���H�#���:��q����t9����[t�q=���3ߢ�&��a6�K,��ּbb,��G�f0��W�����O��]�&�C)5Y��@�],������A$7��)�g�^w�s�O����"U�͸1Y���ge�ᖝ�Y���I����B�5�R��Ӛ�-T#��|��%[:H�l���8FY�Y+���]z?v����a�֗��E$3����T�!��,2��M?� �5��Dw�2�n�m��'�^N<[�L�K>(q�kƉ[���J�bdy�gk,�6�(Y��@��bUŦ�I":L� R�,D�(ܬ��l��e��#p�(]�{\>~��}ǨzWn��r�t�Z}(E����V���:��.~�U	D��~��t:�Oy����/W����`��B'%��]��sM�V;�.`�	�D>+U҄/�(�>w����;�a��߮�mYod��{���
F�6Y(1>Y:��]ٵgg��Q�
�,w4%������Ϫ�{�r[��$l�B1LR_��7�o ��V�q�h?��6�d�|���o!#���%�AcȐi�]�9��-���v{[���'$��{�Ӱw
�3"�R����ǐS6�� 
��f�04�/�(s({<#/�'$��f�	��(	;���}/�ݦ�^/sC�Fq�x�0�j
���U�q��`�X#y�N!��~�}�vZ�ǌ8k��Y��3�Ă�X�א#�~ ��� J�J{�A>+���>lZ#��s���MF�h+H1����9����z��8��2��n�<$ܧ��{���Yarس�S�ڴ0[Yͦ��h���	.|�_	D����K���)J�B��j(F����Z�jQQ���|n��(5��P^)��(!{�(c�2�82��p�f)����:�^�k��:�.��=5Z�r�]��9�$����V��Y�"�a��Je!J�_899�}D���1J �GT�Gn��r��o����F��)��`
QB�z����:��yL�.�h�̬����e4���bX�Ϣr��P�Ɛ�+9�J1D)��9gh�s02�db�20�_���O�:�Sʳ��#e��6�c$����96X&��O�Q6�����.�pz��/ޜ��i9������ؑ�	���C��f���zz)�j�	��dk�%�������2�2)X���3��/�x������R�t�9o,n�U�z��{����@����yg(`�F�f���?���1~oW�������	>Q�1�pت�		�PŪ�u�����|m�N9rʢ���;3aCdC��ۡ��<F�3����P���5a;+[; �$�D�X��������)x���4M�=��@	���
����.���WTj�(���n�۴�1�"+ܟ��u�v�5�6 P?���#��s��ٯ9E`�u,5(DO��ޟ�*�'������u�A_�m�-����P�i�Q>.�u7v_�cR���;Lǡ���x��n�z��6v3��mW��̀s���C��l�b��qh���k���w[��
b�s���ܵ>��T���:4x$�[�s�G�<���4�Ѐ�4edJ8�3JJs����n:M;��l�������Sn�4Y(��_Nz�����3�*�bҜl�o8V��>B�lyY)�i:�(4��d�DHBF�WH:�#�^� JHNg��P"^?���$,7b��J��('�jD�$`�:D��-Ғ�k�PBE�Q"&�)�v|��̫��֏nr"gޙFq!W�:IjզP��>�:l�;$�
�X��N9(��έ�3IP쐶
>�w�*���)	h�8�9�����s�ț�����E���P_V�&g�8�!]UXL��*%t�Y�`j&I��0�k4sB�
�@T:α(��P�2�q��ŔH���B^�I�g|v�����fL���z�D�3⭵3������g���];>���<L���N��>aG�����+f�h�Sd2>������/_�|�v�cۗ��ª�8�2�<|���^�E5�l~/�/���e)�p�񾶛�(<?�W�C�J��3�Y���q|��9$���Y����<��I��B�:�0|��Er�����bfN1�R���)wKN�P���S���S(e����o�C� ��D^��q�d��P�A��Cp[�=���Z7\0��,$PJAއQs�����I؆�!'Ӛc(!d��?t���{���Sph�X�ׁ�5?�	�l8�()�H�t����n�u�.l�f'[k\z���K!����?���̧x      �   n   x�3���K�,�L)M����,@dd`d�k`�kh�`dledaeb�gadn`j�G�ˈө�83/���Y� F��x���9���R��rS�J�f�gjjhfl�G�+F��� �_3�      �   #  x���Mk1�Ϛ_���"4Ү>|�[�������Vm�~�ݵi�}e'��H�><��H3�,��ƾ�M�xظn��+y�A�L���p���w(.\/JN�.E)8��l7������SN+(2]Ud�9�v�}���7�kjΙK��K)J���}�r��J%J+�"�l��EJj*��$H���|ݸ��ݦ����*�8�:&� Pd=�{7Lލ9���!:�@�G��M^�����Н�Z��ε�+F��%Fz2#@F�}���Y���V�p�@�H��֏�pƼ��Fa\�� Cb����S�S(�
�|� yvv�w9Y��XIȌ Kr_�!���o��Dک/��3�бճ��v9YEK��]�$���7BJ')+7���B��}���AER��\��X�P�����vԔN��������{{n�{�SJC9S�Y� �����'wt�!]�Y0F�	��~\!�v�~h�yN1l��8�'�9Y�a��k��9��h}{�+\�'��M�oj��l�+�$���٫�(C�o��
 � �R��      �      x������ � �      �   _   x�3�t��,�TpIM.JM�t,*�L�IU0��4�4204�50"NCN_�g�Z�?�N#402�50�52P04�25�20�3�07j�-����� ���      �     x��QMK�0<����Z��ns���".���%Ұm�(�ߛlE��Ex$Û�L���4p���)�9�d}�{�/3��l'8�C����N��y�rZѶ�-2�Y�USS);�7(R�V��>$܇1&kF4��e�p4�ws�'����Ӯbi��Ҋ�\1ީ����.�&��qp�g���Z���fr�ߝty�)-[-e-���6C$0
<��h����5Lh�2���v���l�>�s;CV*b�^�˅�BղU����jB��\�8      �      x������ � �      �      x������ � �      �   �  x����j�F�Ϫ���E��4�`X��f�L`/�L��d�v$��!��S���h�����a���*u}U-ur�[�>�ڱ{��j�>��'W�쳫_��5?'u��!:�r���s�OU�'i��D"���^˄^�le���<Sٌ�$��-+�/���՞xuD�D��X�:�Y��H �sR����i.��s�<��>�ʹf\�W�	O��XU>���=�wd�����lV�H�*��3{@b��&���c��Ϭ�֮����7m��J�Re�U�
`���]�V���?�y,����W}��Rl^H�̌�M�o�և�ܲ�����TX�ō�s��o��3�ot�.R��Z�	��u9Vic%ѯ�E�-����>��G�;yV#���K��)����7{��׏���֯��G6aM��Th�Q�^!��1���.�uhmu��~���:?-T����`�ocY�����.<c��}dߔ�q��'#�s"�K^L+  
!����o�O%�6���c�����nG�U�n�{2���.	k��}|\���;1����_w�Ȫ��v�����_�Y΍��@Ը������@�5��#oH��i}�H�@��@$Wb�*��3(10���eÎ	�͌-F7s ��ˍ�p�i��^3�@��R��p���)4u��J��U�L�3��	pKx�K�E.�4�-UرK$P��jⒹ�}��.�S����9ڟ�ҏ�½|����op��&��`1���7�� ���B-Fp ��i�C(��ε&Q�z	�7Y�%/<R��ȥ������3�4N��D��F�Q�����"�]N�G[
�\iK��6��4��K�,�5D	Dϻ|p�z�vz{�$��_��q�������Ō�@���Ƹ�q��뗩IĒ��z�P�ҩ�2���(�o����;c=Λ�nqm(�I3����Q9^˛sfu�l*U���$P�>E���{^��ە����3|I�_ۅ��      �   i   x�3�OM*�,I���,@dd`d�k`�kh�`hbedneb�gbffld�G�ˈ�7?)3�I�FzF&��x���9]�S��2�S��f�giljaa�G�+F��� �1*      �      x������ � �      �   �  x���Kn�0���)|���H�z� �f�� �n�I;^}H�A�����"���!��E}ٍ�q�_�����~�_n�O��z���.��c��§fG.���w�@T�L`�X&&Ĉ������	�
h�2��R � ��X� 	��h_��TP%��#8���m��J�3>*�b�\�R�҉��n��]�|���X�֯�z�z[��K-`�w{���4�0?�>{�S��uG�v�{Ym�5��T�;7��RR���,+Zm�SC^*�*��irbU��j�~i2M��r���pۂS`�P���� ����O�q��u ��)d�J����w��\߭�s�9M��d��ڕ���d�#�O����-@m���6�[��U�I�5?�8�bȉ&Sġ[̺���\�=      �   M  x���Mn� ���)� ��/��lڨ�l�=�Q�a⨷�CU��"+B��`>Ã�{��}o���=9�$��$;��tV�L�V5��"���M;<L����y)6eR�Q�L,I+�bƱ;H�T��7��� �V:�I���urZ�t7�qx@*�_�M���ץ��4��:K�|I�	����ӭ&U_�����1ں)�,N��,��'i�$�*M�Wlq�Nϔ�r�U�ܔ��J��� ���Ҵ0�U�A}?�5u����p�g�ysV���v�%��4�/t2��%�o���_C�������È����5@1�8c�����Dz��0�'M��      �      x������ � �      �   �   x�}��j�0E��W�D��X��U7Y4t׍b� p$!�)���ZA3�8�܃h�nqpƷ�!�޵&����~�.��G�-E9��@�@��L��T���X}���H~����_�lR}H`���0/f�8е����.�t!^�\��͍�Ⲏ�tY$��;��� ,4�X�J��B�:Mݜ`|o���cH��öH}�
�gJS�����#P �B���;      �   �  x�}���� ���)x� ~�m��F�J��j��^���H	X�D�>}�f��q,�4�?�a�����7�M�i[��p���σ��xZ�t(-���%Zũ�$��s����A��G��v�=��	zk����.0�bBU�P)��sҝ��ۛ�<����	{��.}�O�J�%�x�(��.�U���ם/!�{4��(Xo��w9�޽k��nTAE���V�I���������h�h\�:�k\u)w��L�C�G\�IBr9'��⅚R��~>W���}�?��$7�z��LA�e��9�k�Ή�oK���.��!���u�n��ᕢ@�n[>+���@��ږ�Y�bׇ1��8tg��0:�4�s��UK�c�ǵ��uǠݘ8�
������\���l����k�����_c����~��� ��R�,�ՊI�X��͜� ����?�[�xMX��]�W��'�� ���W�      �   	  x����n� E����0�{�Jmv��l�AxB�b@���6�.�h$�8H�hnI�ys����9gkq���Gоs��"$4a�wzED��tI������a�-�_�q�c͎)(e+E+X�ʪfjQN?�%�)̾[��v�Wb/N!A����� :����d+TQW��jQA^��x��\�5[ǘ�{N��?����wCW��g-�[EհFU�J�G�I;x�qF�h��Z;�1�4�VN��嬨ٝ��D���DϘ�      �   �  x���Ko�0���+��A�ƼvQ�JY����ʢ�V��&m�}�'�#�����9�F4"ѵ���7Уx�jzt0Z4��;T���F��z�w=hur�Eο�����X��yQS��9��rI��A�t0��$����Ak��{��>�o�<H\g���@�^*��Ja�a+ǝG��}	Bj�ל%�U$�Kҹ}�ba�K�he�u���]���Z�����η��(�/���d(�IZ�,a4OS�$}�	�'��	M<�:��������G��6�섓Z�I[�D�S�=�w�Z�%��feM�$�,����'�����K�~zr�A;�806F��ۙ��8�I��fU�$]��c����6!�=�A4F[C/���WH�:%IJ��VK����4ME �*}�|�섹G�=ڸQ�W�{������:l��C�jF���$'K�d�-\=!.�7���<`�>�?�/}�����u��4KJN�K����m\����x ��a
(|ȎLÞj[�K�ż���I_��d��N0����"a��-I�O����J(08�.���|�1���z�S�zj5b{'����1��c�x��g���`H����}���B]W���=��&��y�VE�/IG�=���5�j�����f4�����8�^W����$�*�r<��ͼr����q�� �      �      x��]ݒ�6v�����[I��/�nl�z�����fo�jv��$*���N������Ir@R��(���Mv]�����}�o�l�,��>-�O���������ԇ�(�Ǥ�϶��~�����m�I��I���_�E�=�	�妓����:��D �(P5�=��'�|M�׌�4Z��,�Bp�����WLx���uZ��t�'�{����P��L��,���t�+�M�I��?��v�n������T��W�/�)|�y-�m����3�O��~���X�v�ަ�}�����ʴ(�����j�i14mv���E��8f,Vc"h1*�o
����1_g�,-��}_�ʙj��mZ�y��U�#��V˕�^%*��K�m�!y��QT��>��*K.t,�DEzIT�@֦bceҝ T�y�cAC&8���D�-��_��:��Qa��C���E���]��+QF"CJc��2W���c�=�`T]�iL�����v��ZXzA�!��sEL{�&E#~}9�e��L���'*B*��"{�$���ugҝd3%	}�H��p� �mZ<eK���0������sX�Ύ�N��TI�v#��H��D�z�����{0��@���� 8�� ј�0�6_f���1�ϒ�fSo0���S�t�H:E���\P
�)��D��{���./f���&<�����r^	M���$cy?%O�c��X�[�M�����4�qV�$�����iY���*�?d�:Y��ٖ>��C��v��2�>���uj�m�ͽϋ�ڽk<;�w�#fY�v�����5�/fx/zy�.d2�#���t3���0<������ŅzeK[��Sw� bԧo%*Si~�Z��ߧ���(�l�%dQ@�߽���s7��dt(�eLK忥[��|]����[P�`����?Vw�&x�����8�/:��Z��/x*%��Ζ�Xz��w�c��V�S����Y��S�(�n^����I���e�^k��2�LY/J6���^?a���Z���e#0H�t�p��,'Ϭx���y���L��/	�XET���W����<��Aw�=�y�
��?������:oJQ�yIIA��ɀ� ��t�;��9�ꛤ؃�x_�VFv9�L`��,�D���`x��5r�/����#c�)�Gw�Ł�@X��ՊC��HOK�a]t���y���qYC]��ㇵ��	n�f5��:(,�tqpXE.��ZFGEh=�3N������R`Fuf�s���<1������BFEP���?6��G�?�t$�t�:�c�o�S�,c�T����`Eם˧vXjy�~pf9`z!��&�!�ث}��S��|���T��D/�#*e� tDPkN����ů��d3�7�>U	G�~N�[z%���;D�R�1�ޯ9,��zGb2�[�|�P���.�I�G��q��q�N��@����H1���ʐĚi5&B�����H�2�ʘ�/q�#k�?�p���E�;�Z"D�`.}H�t��j,��X�9��ᑊ�D$�>�`@�i��t�� ��;�~�\h8�S�c"���z���	�,���ӢZFc���p�&9���i�	��5��&p��	f���Pő��+�^eG���/�x�[}#�i����f[�`�&"dϲ�"
��l�FD��.]ÿqs�o�ܟHf����`S��J4W�傠�svO�]"���4߭mK�:m��t���'=ӱ���W�q�j���WW�c�x��o��'���C�NV`�w6���
8*`yȸV���-B��߲��t?�g��8�*Ϲ���Cq��DXޘ�_`N?�m;�K�,�ϖ�__���6�J;��a��0"1�My-VX4~W,W�I��K���;K��v*^�>��z�B´쫊+�v���^��CKov��,�ai���@o��=�oE���N%y<*���Hh6�v��R�k��CQ���j���fQ�,��րO�3��	��&�B��*���ނ�!�Ԙ{Iy��|��O#�V4���	�AF��-�\{?l08?���z��6�9���%\�P3��	V=�~ɟA�?�����/L��I3���~� �J��[P�G$8D��]�O�_�򐬫@�TP����MyZ��� q~9QL�1B�ޯP��}�d��2�ڔ���Ң��늰ڭUE�վ�d��W�]�1�folR�9����@#y+�Y�Z"�����W��շ�ӽ�e��O��&=�����F�`����a��x�J<��=��>]��9���%��O���������+u��%B�t�>�������pk��EZ�ҥفO�K��ÓU�UKM����IC"i���[�����=�z/�na�n��$�栗��<#x�,$w׼�D������߭�����a��6��u៚|����ϯj��u��襆LjNz��a�c�������*N�׵��QP�lf+��N��P��1��<�����
�I�:�U��\�l�uH��{��%�Qy?�~�t�%-A�&������m^�Y
�����.7�����9k����j���Ec"�d�����G�����ӷX0���4�'�N!s�x�]+�����i�SrA���0��f_Aʘ�f������\��ju��
������T�G�,ݞ�l��gziJ�s�N�W���8��P-��>叏0�~s��������:�M�@[V��̔�\�6�41;��-r�����CAI��D���1�nT��-q�]��[��� .r����!�=�%��'���n���D�S�d7Aɝ�o������\H1nT�L���!$�}*��o�e�)��ӭR�j����j��ي�cE�� (�էP`0��GG+�)�
��,���RQ:&Bd��y�U}z6'�&�As U�|XҤ��g��\����)��~�5`�VTq��!@����p)��� ��e����m�G�`����?,�2��<���lT!����+{�.����|:�q�P1E��㊠q4�����oI�;����1�Jz�$+B���A]�L���ph�AјqR��U2��OQV��8�un��#0�T��-V�y��{���@�q�d�=Hkcw̟�u3T�\�8舳��/�tE��ۋo�����}c5��`�ܺ��tV�>��aݥ�}�M�{2u�,Q���Gg���f���m�8WzL�8N�x\d]���u�^�
�d�Gv�N66���0�d�lW����]�������q�\r��pB/�5�^��`�9�����%B�1,ϲ�d9�G_�*j.,��<�Z���DxdYxis�c�?d���p{�=�܃6젋;�a�2om�H�,�[�NgW%�����v�>�W�FS�O���6�<�"P��[Q�Wٮ��g��e^>��t�'�1���{��?{踂�����1:���z1j-Yǵ舰���~L
h�lwQH��׭d����+�ran�n�5�NL��vs5���P���Z"�Ž�w���MƩ��g��4�������B���r��t������݉w�@[��d�jii�+�}�t����}��'�40?���1���z�y������5Bkk��X���q��^��8J���<�+W�"�}�OBв(5�~f�!p���!>"A�5�z6�n[��9��~W�����˞����٬� pQ�Ú�PU����j���`��w��"�;x��ǋ�����������7.�}���wz{#�U����Cg�%�Ƚ���!����2��C(��U)s;�BJX��U�zW'��O!�s�5q�{l��Y��ۧ��M�5)���tE����X=�ƍ���a�"�)�H���+=i� u� ��ު�X�q��xK�
CTX�R�l���"��"�8����?�Dx�4����rTa�v���0f��eG�M2���&��}�P��`xo��qw��D#�{k�Q�u��k��F�����Ű�)�.kҨ:��cX��    1�Aʜ�����ҮɎ�O�nۺ�	�����N�*<�FՌ.����,�}���D�~]`��D�utTM��E\�c"�{������;&�]���r����bd�����m��`�2�Z0
$�s$�p�8_���o�C��+V%~���S�lK�Z�e����V�X�w�JB��`@��BgC5W��&nd�'1P�#T�y
,�Į�o�/����x_�>o��x�������^Am�M��TT�|�l�`��ޘ�8N~7��p=�68�D�\!��4����`
g�놻F[��"��ķ��=Kf�p�<�E���l��$	%�ԍM�E���X�������g@u��yVt�GR���|��sc��Q9�6�|���K��]�����U�=�,qk�;Y΅-)z�Ћ����v&��C�|^����bo��7�;T�l����HI:*2����}�e^c��"��xLj�@E_d@���~M�~�϶��6T�q4&2F�il�q^^����N�173<^JC�:�z~�+2�"��;�;��`�	&�섬itV+5��6�M�jIF�Adn-�q�����	��
lcKO���m�8�8:�$�4�,�<�/��s�N���I2��c"�9�8�c���)�� �]�Fe�*�7?z�̱�8����r�/B�ܳLh���C?�w;s����0�ukb�[���-2ITd�n��7��n6Lf^���9J͒�H�PS��:��'��=xn$�����^�_��1��?���p� X(D$���#�#��š;g�aѰ��/�k:,Ϙ=��EsF��	V�� ��.�NU�Ʃ�P35��/qw@�0��,:	dGב҈�xLdl��z�Z�n��o���j4qT�-�]t�� X��+LB���֞B_dz�4Ae;/<Xۤ�v����8�����-��D�7\&�ɺ0["�e�����nw����U�ܸ�/7��Zk[NC���c�ֆO�5ʀF�mxs�JJ:�ҎȨ��8���1�vCk=�OCER�l�Q�*���@f��t��U�,��I`�DHu���oB=��H=7�F"+I>&2�ހ�����D��.d.$�ݡx�rLd\�/��<��]��X#<�(c�T�+2X�L�<���?8^"$1�h<&2X�`L��Q14B�F�DtTd�
����-����@k]��� W�S���+w.^X��8�5*����KA���{6��&j�SҖ�`Q���|���V���Z�3��t=����|����K�ޘ�L{Ė��;��4��}���:�m�O]��������X������XPX?E��ј�`��C��n������%�DF؛1�����k��lL��y�%2��wk���G{��lv��ن��{l�3�E���mY�;H��N%?mA�3'!���#�}5�q� ��2����Zw�D�2�� ��0���s�'T�_�=d-�A&ގ<��_�?�"�xORE�xLd@ʷ���:W�q��Cz�������5��l�0hN�;XGd��ޖxH��Cl�h|;���1�������SE�E��1Z�ֻe}�A_�y �+��i�L
^\����xKd�#�$H ��d[e��/W1#]�l�����CJy�U�G�M%zP]��ʾ!� �Ig#��y�H�]ǵD9�8g��7c������ٞ���Uw��D���� ��������<�č;"B�1����)�.����])�Z���]o�%2�����"�O�k��K��R:*2UV�c��V�T���M�":j�[�L�c���?,/Y����RW|���x�ؼF��(�T��JD�A��G1���_\�xbDb�Oߌ���Z�WZQ�SSm-�1��ľ�k�*���"7��%"I�L@Gd@�k�vf�cs���<,AF��MGd���@w5BXZ=�N�Ϟ�c"W�5#�0���ZL�`b������[��u����'��9'vMb��@S%�H��%B�J^����t��0+6�ڔ._�w,d,��D��sg��m����\g6�}]�X�	6��_���j~%fZ��᳿Z���\�p6!���M(:���v��:><���V,�2
5\�1��ۓ��^� �b��H
w�uKd�5�n����\΋i����N��<�s�f����K�F �P)�TwT�DF�i����p��C�a�u>�b��O" ��G!�abUc"��{�Qb.�YF������~?z�=f��:F�A�䏯�.��,�坚&a��|ݔ5�`
g�ă�v��Q��#�%2#�y�Zs�T�{����t��<�T���ss(�����U���=<dK�����>0A���a���BvE��J<��TQ�6l�~�NRӊ�˜��`=߾�����߄��BM�E�P]��A�0Y^�X�nC�ӎ����������C���N�˽®a���9���e���kWd0�/�D=:��{a�B�����`��A�������ȥ��ў;�L{�7!�Ek�dԷ�>p�cAu� �"3�/� � ��Q@Z8z!d�!xI�D)�2����+�#��}P!��7&2�s7��[u1�e?��\���r.D�[�IB�K���@���c�h6ͣ��^PJGmv��� �����_�����=���bF#�[��"$��[�9>�>k���=Ԯg���������!�y�mj�Ml���pa/�{4����ȴ&�:E�e�>�oY�Nn_�m7g`O�+����*�Q��C���\�d]�l������77�����!��ɸ�p�{�v�!�v���(� ?����.�VK�����5ʳ���Z��	��8a�|Wo� ��Uv����5��������T��R�޳n�ߋ���7�oq��j����l�[k��a��۱�Z�N���0�O�ulЏ����10����+�$��+�t[����^���%ɛ�R�}�s��걄|�RE��T��ߎ=��5w��6�	n���Z4S."�V��+["���x| Z	�*&����/ӽ��p�.ǚ����ہ�*��{�;���u}
���yzɴ��*O� �����E�(��.�rK�S���u��4ؙp�`����������oSԣy�6�;��1���w�V��e�B�ڹ�1 ؜of\S~�>�k-ط_?��Cy�s�j?���o�3C&	����["|�u�Bq�*{\���x��<7M�5�=���}s�q%�0t�FD���}�s�tv����.	u*�*�	�ǖL��
5#����]�ƒ}�i�#��H#&٦M����C��W�6��
����3�����m��v�g��vYw�Q'�`*�u۬��x���"�e��Qܧ~wE88�|z4?C;S�}pΩ�M7;��vl�͑����N�OU�z �|򴃛�����a�oi�TS�yI�+�_��պ���}V��ɳوj!��;������>zG�n�~�X��q!��)����j�p^��Ub��[%,�s�h�hh�����ٚh�h��Ȅ1�s�֙͞{)l�M�a��Ǆ����n������2�@`KdH����/����}�9�
��i꧶�=�\���IA�d��`hJ���*I:SRW�F'��[��!D����[2�Șv��-�9}}���1��\����]�/�Fa���P�uD�:�KWP�̓o0����Fc����%Ҍ�%��ied=�%�ew)�!�Fu�m	��
\�t|?XJ��`Hk�}��r�N�C���$�8,Bo7R\�.�D������e�K���������fQ��}�����>�ۮ0���s�1ǅ�I_,����i���/��qꯩ�0G�D�%�Ӱ�+\3U����x���H����`gs2�:f*?�|��Myi��T�;!��ky-���a	:V���	c͡i)+�6��+�p�!NBŴ谤tDf4�k��}s���Qu� �f��F�F�4��y(�<�>�+��ޏ�G���|��V9���g���H�#.Ę�L���?lM�Bϡ4�   't
����#CJo�J���Bu�ĴD�V1q\��>2m�]�T6[[�|�f8=��3(�m���*\�)���eԽ1�����
�ֶ���d7�����'�q�[8Ls�{���h�~�È�W%^鐕0�NhBZ�r_d.��h�ҁ�%����P|Y&R�K�����GS�.8��v�%�5'������'�1�gn4[���x���<�c5o���<ߦ�a���H��JuN�uDg�5�؉]�e�J~"��hk�u�qQWe�=�ꫯ��SQ�      �      x������ � �      �      x������ � �      �     x���Mn� F�p��@,��`��.�Ax��d�v�ܾЦjWn�#��{�@��n�~v�&�n�2� k��f�at�����R��H�ʶrU�P�$��� ͠�A�F�Ϊ� ⪲�o4b=��P�n���F3L1���:�-��A����v� �Z$|�1o��q&�������fJf�g1�sӛ�V� �me��z�LZj�`�r��7J ����ԏB��B�6�7F��Ua��:��k}u�R\�=��G�����(�B7�i���4��O��2      �   J   x�3����L�TJ�K-O��4B��kEAfQj
g	X����@��\��P��������B�������W� InR      �   �  x����n�8��5O������,��H�ަ@oz�جC�,y%9��~G���k�R�)�����9�&m�ٶng��9��)�I����0�T���d��`DK��%7��=�ߡJ�b"pO=m{��n�%S&%���w�@$ϸ�&g	�G�C��e�bD(�@%���kv���v�m�e�Ε�aGG	����X�g;�Gh"�k�G$�ɦ���k���r���<tl/�I�u]�j��3D�\E$�$y��S�-�WfTQbBI�%�4��m��W3͹��K��us_c�p�Bz��"3���_�l@��lY?�䫌j�i�e/�#���l%_JC�vQ��dҕ@���Ȉh�c�4��z���������ɦhl�-��%+zB^��Z|붶j��RQ��U.CO�K@M��S55����4"#ɭ-�50����[�0�|ƨ���Br*�^ƆS6=!��LƤR���%`|v�8LRET({�L$��t{j�IK׹}�a}ʷ~.1�Y��L�pl�s�2�i̵0x������V�ۺ�-�� R2h��a�)��ݏ��Dp4#/7��0��C[�ӛGl��NsJD��L0�8l��J7�e*fb� 'ɇ6u]Z��\6աO����u��ceH� �V��E��7�m�������*-���sj���D&&Di!u(68m��S��1�ߓklz[�]5Z��&'%�S� �We�>�����M����(�q(�H���[*ʾ���[��V�����x	��L��������O�����I!$�ZR(r^�~��b��6u;f�ׇ��i�}��k�+�sc��(ϯ�oq6j��m}D�O�{Hw�-p�Ʋe��r��K����u��N`����2��3�S�߶�yĦz1i���׊�����F��ަEu�*q^��/�"�M���y�y	I����TNŝFz��3���'��&o��v%�S�$T����z���+��]A��,Ѓ'	O��\IԜ��5I D�)���4�d�X��$��7mq2=�#*^i�Jx	��g�u4-�K��<�$b��|?�t��\_5U!��@����9��*&T��{	0֯��X�髓+w>q�֔�F�II&��>=?�5/	�(׌\y<� �w���I�l�~����U\g���������Ӱ�����u�0��,S,����ǈ�Ԝӏ����Z]�����w�g��g�#��Q��͢j��>6~r�2��*�ʞ�
�W�����`q�Z�B0<��@��f�{�=��pmi�q�=;i?7R���l&>�M�����g���#(�llsp]�'�����%Pt��∽�+�9��\���X��خw��z%{v��_��	��Щ�8;n���%i�(	1���f`���eY[ �R���9�@I�{Q5���g2c�>7�$����v%P2I��w��*�e�=֗��\c��F	�e ����      �      x������ � �      �   �   x�}�=n�0Fg����⏨Cdi�,<t�Ҡ�ܦ���Ʒ�$>���� ��@�;����L1KL,][7.ܒ4O
������!���D�]�Ԧ.y��>d?_rfZ��C�F~��M�ݬ��6��
��粼?y��+\�F�� ����z��Qr��κ}G��`[�DE4ݟ�� �m�����k�Y|b�]���e� �D���mm      �      x������ � �      �      x������ � �      �   o  x�ݘ�r�F���S������;�⊜DU�S��k���u�Tz��`[�٭���B*ďa����٨Ξj�����m%��ʯ�:��\�1�c.�D�D�����2�#��,/��������C~æY�Pߏ�>=�uE�_�S6/�:}`W4���{5(�A!��@����@�u�y"|l��|PZ�Ԁ�:@���;�>5���@x�R�T H҃��ЦA:P���)P���E�=hA��`�W`�L�6V���,�`5Xց��� '�ip��x	ڀ���-<=Qj�c�sz_��4e{��a&v�"���=� �7��b\%h�c��zH������k`̺An�rMg�1�¦/�Y{�2�Ͻ~G,s�P&R$(bi9�@%��E��$_�~���
8���j��d7|�Es��B��-47�ïځ�藺p>CL�����I�f��?�~����02�j��6�f��;���Jo����$���k!7A-�W8)f]"� ���r@Yу�z��h}t��/�7�Q�Tm��`:���D�Xyk��V4��T&̯�_'�}m-NTѼ�)Ysk�l�V���cY�u^o:Gc��YK�N&�ݬ�G���"�\���S7k��YE@ϗ�}Y�u�-M�Ou�x����Y�����[�1�Aqƃa'���4ʩOI4�]�n{��W~"��CI��9�lKɎw��6��;���m�T���Đ<ib����jP�U9�>�t[�6�e4]�U��<:PF�uE��}�����1Jͅ�����v�Xe�:~��-���c!�ӆM�R����[o��z��vy�T2��l���g���>���Q'��m�<������������9�n��]�9�;=cA:X����نikm��!��sM5��U�gvSG��E2��.�����t���_v��M�&���he�UHG<�C�T��mR.Yu�5�vY�.�0�a�ج��oVO�C��7,mn��ٲ�o���!�` ~Q|Ϋ�XdE}:]� t�hť3C҉'%��ˢΪ�����\�~�<���d#�j�*��r�y��|���]�����3��3*f�\C��(�͐t�Z�(o#��%j�����x4���      �      x�ԽK�G�.�F�
��ct��݃�a�ѥI�U]�v�.�I��LdHR��,��\�k��3����9�@Dx ɒ����*��	���y��p%V�������ߥCZo�k��߯�<���>�>�t��"�=��v�q�c�{Hwz<��J��¯�C�_��������5c��W.��z�Ԭ�Zq���/�I�D����V�D�"�3"�#�YC�WA�`�T�l��۴y����R~ÕZ1��b�Y�9�������+������{�~�֝��{�[ût������+6��_�%�W�n45T�%R�Ҭ;�߰nE��~��\\��ǣ~��mw���߭�T��ʥ�r�da�+���E��4|�4�r�K~�Ѝ^�L����_�$3�,�&_���_.a3�)��9/��Mr��n�@^/O��s�5�%^	����t��#�U��O_n�K�	M�t3�DI��!;-Lt!�L�ownb��m��ޥg�4���HNE��H��M�.�9"�#.e�d�DY/,Qgg+��ϧ���u�x���n{�����鴿�������+)7T+n��7"��=�ĝ0�(��<�e$"�i�IX2^�o:�S�I��oN��>���N�ޝ�����Q`�ST�rH͕[q�����I�J�b&NhO�w>|e�sހ�߀����?_��?�V��ޯ�~J������06�v�� �2�U!s��%d)IA[B�P1� c��\�i��Â/�i����/�Oxga����קw�#l�5���	��~S=�f╂�����f�dW~���o��7�w�п���o�y|-_�f������!�x���e�	��&D�,
Cȍ/w� ��+8!��O�,�W����Щ:��=L�-�D�x�e �M�2�2P�B�n����������a�'�]�W�llc���#ҵ��baq$��`�IE���E���d���K�6֫�v�-.�~,~jJ�ؖor<]J7�Q��	�=Ԉjeʳ��ꔎ��Y�P�i�)��i8�K$�[S��ט������ez+6�(i_	���E;����ѷ�ů�k&_I����T�2�D<��}��0�+-|��ܾ��i(��D�����)3��a ���d�$�Ȝ�	�m�����y�Jo���T��u���fA����@�ӹU��p�b	�_A��H镉!&
�I���.�oΗ�V_���z����<m�n����a�u����?������?]��j$�a���0n�VK$v��R�P.PªH8�ZoЌ ���<8\��ɏi�|��$g�60#8k�%�u�1�w�~�Ncٵ�]�Rd���ǔ�P�4�8[��m�pm�x?e14YkҀ��o���լ�q�o��κ�S�6_����+g@��L�9b3�5*9'�;J"��b�[�/�|9{�)E�;�-I�`���e��I�y=�0�{8l������i�x|�n��o�]�"���,�_zXwL$�e��4���#�����홁hy6�$_�O��`�Es�> '=����u�4�K�k�Dk�L��Xi�?_�"V	E�W��y��7�����b�2�F�k�5g0<mm�=*<�V ��rS�Z�b~�����!����!�����{�B�a�N�6��)��L��*$̦1z�Ԭ�ˁ�m5h�3�򢙾u�¥Rm,����5�jG5��P�)J�H�M�)�9�k��Dw����[��D�]mjH���ZE��BHx�D�(�8�.�^�}*Y�=j�8�\�'�oIc�$+%�gԚJw>��o����oJ�jÍ�r��#ܕ�ui˔p���yX �7���T�C�?�}ޜ�q�����������]��TCuy�(�u�K���^��גτ&)���8�Z�y��-^^d�{"4hϝ$��RG����զT��^}���c�=��:`�ZYŐ�$�?;��1[����d�$��L.�[�`�}��.�k�[��R�'�|L�v]BYc} �#<ƈ7^S����f���hɜA/Q��D�gJS�(��m��4 �o
@��^a(@1/l�tm�J��a)�o�	��M ̊$��\�j�h�l������w��%XS$�5f�D6�ͳ1��*��$��F<��0��90Fd5���>�龾Kq�J䩽��K� ��-\lʝΛ�큩6�[pn�"����F�%R��ƜH9X4W� �*j-��i���ʬ�ķe_�Q�P��ݮ~���qx�ύ�j��!��RK$`�fn#L,*(�"�fΠ�"���^��(R �
��*�%f���Ў��Ҍ"�ϻ='GU�(����&߈F�?̐`��lM;����.�?�Kz	�i��)8c���>�m�tG�v1@�<m�q�c#����&$0�V���(O���D:�R�8�f�E2�\i�޳G1����-ZӲ�TM%�t-d�%�t�w`/�3u�DXJU�)����Xb�������r�!��:�gn .^ɍ��O70"]�	��8xU�~�<I�I8u+�u��vi�D��ճ���L�%�(���L��*}X$�y-G߯��?�epYѲ(_+K�N��55�Y��)h�N`��D$��J��2�%\+��OR-YIp��`"� V��j8�`<I�df���*�H&&fF�u�Y�`v�F��g�+1 ���{p���$�FZ��\ul�4�)�a�x(fe�v�#��������p|���~��a����6o��7q�u�O�|�C[`�*ZqȐ�t��<rP����
%HrA�,�
�?���w֬��{8}l9�e��R�e��H�UR-�@NR\~��B�z����,����8��p�Gdj\��h� ���}�����;����W���@��θ��#�(��g�Y���{,���`�*�%!#R�n��cq��<�Af�#�T�)%Fz�Dw������1���� �������l��b���A
���*x�$�K`��([|�Yz��+	�[`> c�G���Vff��������h(ޟ���G8����;�_������U3ғ�W�na>�U#<��q�,S��E
O��3���	οچ��Ē�|�����,v���>�u�=���3�r�0<	����w�~���u����s�O����B4���H�Lg���Q��<�����6�P�`xEd����X�泽#� O>���#-�٤o��o�\w:7�������O�����ɗ��1�'����U�HxrbP�"h���ɥ��<><����n#��K��z$.��G��?��6�#V3��������n�㗠�+~��#J#+��fH����1�ѩI�ك�"A�2T9�k����ZH0��`�i�eT�v�h��[����}>y0o�F7JI�DB14k^r�����L�V�X.=3J�l�p�U��>���;�pu TN;���!��}�-jhp��["��رzs����o�&����r
����I�ٞr����I0�=˅钕�k_���@�Y�kN���׉�n��3$��li�U�R��`Kp�q/I�l0
����tիt�"Eu�5��/� ��ᔳ7�����b������G���} �⎩S�1�D`�5�6|�tUH�ƴ�w�AA(pZКO*�f�~�Q����J���]!x�|&IW�Pa���#x6'e!�A�+ZZ��ILƶw�W�3��;7��cq�^����m�s����WT}�7]�}%�F�@U�i��%m.%��&w|<�fٰ�[E���pk�i*gd�@zFzvN�Iq�Xc�H(gfs_* �S a�M�JrL�S��Ă�rJ?f#�� >��b���4+0ɧGFY'S�/�=��%y���#��������S�/���.��px���x��{e��8�sX��1`�23$8?���wf^�.S8=���w\8@_���]����y�j���J�3�3����aɘqI�N����a�V҉ei+�,d�p�^q�0�����ی���4������    ��>4�|p;?���+SQ�bL�VK+�H�����;S=�Y��hf6
%�̢/�ɢ�t.g}i(���m�垗����<ާ��ϖ�23�xӍ�\(�D�D9_5�[��nG_������{$>>����t�l}��G��'x��V'ge	�Lkc��4U�j��AQ���FE!�ɉo�f<p*~�S��)���-Ɲ��a�ۆ����ѯK���S��B�'�Q�*E���0C�x�uDh
�9h��m���LLrR:�hJ�Ye�� /I�2l��ā5�,s*��<t�c18�?ϑ�s����0����9������kGv۟����E�߭�݆���ϧ���m�{4֦��z���Hm�_��o��i���۽������TY��m0��1o���.���B����]��1p�_�R��%t���%��0M�U�f�(x������E,�}�U!� 2�ɤ��S�'�(O^Y]}��O�2p�
�8l%�?���t���:%FN8<�A�����_&����IA���؜ZfbW��5(��?�A#x����� ���Cu9#���UE&ˍe���rB�[�5��a�DT�:႔�,"4�p���ڔ�
�W���.e�Ń�|ng����J�6�Q�i8o�D�����
jd�$�,����O \t4���'�u�	���ᓒ����tC-m�=cD�J��tl�&<;�/�J�A�h����qn1cْS%��##ҵZP��ҥ Rc�P;E@���œ�P�:�찙ڗ?�ձ>�g;��n�h���
�a	*������rV�me�%`��O��N�^
FS��V�3I��4�7�@�����T�M�6�L��O]�+��h+d�qL$B�1�:[UQʴ��Ԥf����V|�u���e�nN��W\l׍��HC�9�߅����X}�=���޵Z�^�-���F��Ȫ���t5HAIQ0U�ə(I�Xz"x�H^ԩ�nL�Շ�!^����%����7�u[����&`�m*��;���X�.^=��� gؼ �����8u3�^Ԟ�l@)sG����f�Z������O�E�a�g�a+��{��KL��H��Օ+��P8~�"�5���&)u��@�q��;�[��d�F*&�OmD�p��9�:�0dtzZ��e�<Q���Ԯ�H��[pК��ޤ2ԋ��ǆB�����-�'J��`��%R�2jej���þ[�r$JYJ4x�)�yL��e���ghJ<��ZR�x�X����3x!����� :������y�(�
sZTp��7=$]ɋ�`�ڌh�NB�˂~'*Ke�l����F�I�@X�
'����uQ�lf�+��� ������i�_��)F2�*E?$]��FL���z��A� ���,(Y��K�s�\�[����_��h���\�;�]zx��I_2?s��^������th���=�]^�CӲҶOD��4���g3�/E��[�tT:���xn���<	��d�b�|ޙ(�Dx[����)�'cmVX'E���r�t5W�,��)�kH#��l�C2b�»w|�ܸ{�sc�"m�蟚fX�;C��t!�O>��(%	�.b�S9h�f�-Bo	~~ �T�#�e�!���M����\k�gvz!a0�#�]�M-s�b�5 R��gHxĳ=��l�k
�z+'k�\�
�I��K�k��cR�s)8a�@���q����$���]y�ۘ:w��^s� ���@_f�)9V��5�HOs�#>���uSID"�D%,�c =��4G+Ĩ�l�,�,=�^�&MR���le�Ւ��!��@�w���)�LD��(8Y��*"$T�ˮ�N2ݣ�^؞ޭ7q��4-�0�z#�H�D^P3�����QH�@@�c�$��#g>kG�X��]�5p��w�t��: :ب�PО�2w�w��(�sB��,�PmR�1�7["U�F٭Y�^�5�(�Fٿ����t���5�Ŗ&�$�K��j�&&�ůu$&	"5u�&å]�{�ڻ-�{Q,��S'������+�F���1��殍k=᳷�|��SK3MяH��=_��a�������`/ʙ�{�[��x�uεǝ<��@r|!�Q���	�m�N ��/<�D��P������,���Ԑ>{ #EE�����ɑ�B_��:gn��?n�� v�V��Eb	�@/��A���dK$-�<	��4[2"aV�>��L ���x�7��݋�6"D�SE0"]����fFRᷘ_��[���&c�ׂ,ϔgL_�@|�VNЮ��/j�lh������`iA5.V�D����}��筯/����H��A���H���k޵�w������v���`�QnuP%Y����v�`��0��%6��yk���ƙJ�X��<��@e�\z,��q�)ɥ��ZN�Q*{啌?���V�3��Dlѧ�:����R��{���3Ih����d��ν��z�`�-��c���G4����ߕ��#�[��/�А�l}S.Sb��Lj�gH��T�g����M�PC
��PΗH��l9�g���@��Kvhge#�i�����`I����>�=P�ZC����I<Q��cpi�S��Y��[��b�ln��A0�9� ș�K$l7s�*b.�Ht��M�By���"�}����	m�D�DA�`͈�T�D䐙��R2�mQ���k
���~rؠ7C��lV=f�I9gb�?�;X�H��JT��;�����������<#��*�*7V0��	�>�d$W"�=�XyWH�Fs_�j�q�!��7�SQ������[�eWX������5�t�v��I/�`O�b+m�'�2��	�;�@�g��3�crif[}7��_ߍ�s�ɂ�����e�����f���ފv�{�m	=�+�!]��,�l���km����O�m�g\38*AX	,�M�Y�'IK���*,�ԕ]"�j��mՈf�_="�+�)�y�)"�!�yX��`Q�����ruWjݹߍ܆�K?oo�B�-���]"�k.�r\���H0�JW�4�hc��iw��
�?��t�a�qM�W�_4MA�۾����>���D"@0+,����O�`�������??`+�<���a��C���v;�Fk����?~�Mk,�k~0W�F޴!���yCҫ\(X�qsڰ	�̄�\�k��p\pPd���C��(��lqP�ч�śϻ����RL{�G����5`ꖌ*��0DD�L�K�E�Z/&�3�䏋�|N��,S�W��h%y��9"�+( V��B�\3q�j ����U��n_����YG/�+i6TSeI�
*w4�	��p{�f��g(MV�Z�ui�_;:2�ND1��i�Z"]{'���@�S%��'�;�^0�@풉�컳�Aο�� v��Km ��Ak $x����,��Q�G�����ap�Ỵh)�k�H�$f�)���[��@P37��͋�V��U��o�.f�����چ�
�cD�W�^[j3<҈Qfl.R�D��|r�?u~�o���s�s��ֿ�.}8��3 ,�kr��R(5U #Rsł�	�kfY��$�	\�ķu��h#�D�w���]v7݂�Z;���Sm?"]���G8v**k�� k2*Ã�E^Y)������[��m�°]iG�|n�����4����bX�?C�v	)reP��	�>���Q��s��"��jKc��&�r�)�6|*��~	�P6M3�ňd� ���g���+��X�"�z*��t����ό<�s�z����DdC�t�#ҵ��
�0fh�c�{X�N��^�(���i�85�:�dܜ�t'����n�cA.Cػ� ��sX͠��.�-�qk�*hD�����'�Kyۍ����Ј���t���dG%����5ͪE�C�?�?������x���a���b�ܯ�������6���7���Wg���$�B�V�%k(׸�c���(���f��=��d$���/��i�R�7���-l�}8ab�t��|��kC�:n�5#>r    ��$Ú"�U��]` �S�hc���U�c���+����ZRn�H�L�h�	��pA�n~TEH��v>ksv%TF�~�>f8<��iI�;�m���	�U�C��C)/���O�~��J��|(����sm��+���N�S
�������Mp��;$��P�H��N����z�I �tƬ�R"sA�38�����_���7O��7�_��kss�G��H-��Tؐt-������g,a������AY���"\�p��p'z�Q�qkA/�1Jm����Ї�kHGh�8���%x���3"t��k#��xi���o/Brl��BK%�Hv䤙N9w)y��L���������'�7f��3U5�gJ��'v^a��l�8�֏�$2
�ȳ�Y�G�����>["]{�!'�=����@� B�J�+M)05#e�jW:x��܁M�yɎU�_���
��4�r�Y3lל!]�׎�xƱ4�X|��(³v���xB� :1�$�9�$'��@�u��A��`ɿ8��p��.i1�0�.%�Tf��j��/x��K�ۂ�x����M_ۇS�l��1��%2��t�N�IG�!�-.Ew��7�w�l�?����@A؅1v<ThJ��@�^I&8� ���jet_�IL�(S�-��p^�@ptB���@!��g�?l��d�@>��XҢh����n�FN�J�s�j�sA1l������������������o��_����{����o�ǿ����/�'��S֬	��+��cg��7�1l�G�[��Z���*IB�:�����p�hC�U��?2��(�����J�0�2��d�~�y6@�?�Y �����oqvH+�
�|)*\���Xn���2Ȱ��3%�kܬlF�9Z��E,�Ѣ��y�1����v2��_��������ɭto��[�#��@opt��k=�I�S���Ǒ����=����ǳ��d�D_4%$~��5fHXO�.ȱ�/X����L���?~IFa��:�k��c\��fH�B�8o8��y�7��Q�:�O��U8|H���8��	Z�p�'gIt�)&�}�W��9�G��
�$������*��ݖ_�]�%ԅy�R���H��)Z�����������dJ��`�x|Y*QG|���(�2^=K��%b�")xl, C��h��������]����ގR��g7�F�Y5f�/��!�{�5Nq̞��y �#
5�T�RX{�����뀟�V��?�U�� ����&a�
vZu�0�v�����cq V��t�#�I]���H�A"�V~)�:՚d�5�NY�L���Ÿ�~�:2�!���p#�D�87ʂ?뽕��l����Z(��7���6�!�6��Q¡&5�x#Ү�@����G�p3L=դ�חB�2���/׃�.o|�9tK�3+3�(�'�%���
j��ă���w����� 3-����#Vg ���2P/1�Y��B�CK�F/<ڝ���o*`�!�j�}H�i��"�GMT ��U���ٺ�X�~�Ź���ܷ[�����z�)�%��v�%Ҥ�R]�ɏ�G:�!���j��U�;09x��{OSlz��Tr��7li����A|��(�=�7��lUyi&�=߆-�J��l�5K����/�hV_o+��k*+=��^�I�|s6������J��q&���K2%�����J��^��*��)��a�Ksk�7;Ԗ,b�Q�D���@E%��`?����ue�K��K����ڕ}�b{p"{�(ݞɷ�i�1�&Ec���S��FC��1+>!8�MX+��fR�@[ŰT�FUR`]c�p)��#�R��H`j�'�����V�l��@���/sgR�s��|*�F��L�'�ɹ���\�t6G
�&�0x\$C�"�\c����h��ۿ-�s�޳��8��)fP9C�Ҭ2S8q�b�03��rMl�f�����b��2*���26�� �'�t^l�Ɉ��	�:�<dH�\Ò��n�=�X�B`���`'�1�	|5O��b���>����n��B�0
br��]S��wŌ����#ӟ��@�1
�B^�sIL1e��1`i;��p����cM�p'�eR�JH�NĖ���Z �)չv`�}���,�rL6�)���u����}�����(0���~�ӝ;��?�24f�ց�eC!^�c^���t��cji�1��M"�Յ���_uƶ1O��,V0[3
<��=Q�ǲ�s&�9�~�`�I����oS~D�H?`�nU[X�X�'�[��͵ˡ�3o��
�~����[�d���pܸ��Ϸaa���I���I=��s�����~��#gn��/�+D�lx�D�6��y3�E��eF�a$�9e�n��`���8��cq�M �Op�+V�`���V�W�ou��j�l���gl#��Hp�a�W�a}�:��q�Δ�lS���v��)l�ŰDH/.�:���/���H��akTc�H���/�/�=���Q/+�i�L��f8�c�ԣ����ݑ������c��۷�3h�3�S)��#<�^"]��&�8b���IxI��Y�jx�Ռ�o�w8^��v��$��@A��pV[n����
��CI�����>�>`� ��b��y�]A�.��g����<��)��y���lHRT�j�%��zoU�D!�d4iۥbd9�8.�\`�����Z�S����%��:��{���GU �ۂ�[@��A(0e���FC�)���
�co>�Ը��v���(���d�%і��Ym��˶�y��� E��Y���T��c���56{�hm�SS<���[��a�ZO�:��R�Ӡ���T��Z.P�a
��>ű��T��?�w�'k�js� "����T�)�ӈ�L-�Gk[��!3GT$İ��.��|���Υ�}���+�-c�}[^P@�FᘿbB`XZ0-�jD�����h�{~���- |�d��CE��)��\t�2�=9�q��V�r0��(�t�ƨa��N$�bR>	��*�R��J�r۷��.�4Y7ʑo��`jJ����%�Y�(����=��K6�=bA�F�x�i�rD������uE��r�.M�i��XԿDv�{�϶�1K$��>��!��M��gs�.��$�q["]=Eе
8�
]��I��ԝN4�$����m�G9�)m)0�8ZOřڅ�U��LpZ�iH��t���.��q:*�w�禘�T��M��D�*E��^h��-�8c�z���\��������s*ǈȨ�F�Ʋ�ؔ	Ox�٦�MpB#G#���tEb�."m�˙0�-ٗv�� �Np1jR���Sl:ap}�'mo%%x���I�_+�ϒ:������K��9�m�,ւM��~�=yJ���o_�I�����J+�
��U��M,�(�D�
U3l�:��Xu�_-�S�l\g��ؔ�lJV��X6ژ%�M4Z���0 hv�,��5�oӇ���w��c�C��	#l&I'(v#j3�~�H��gu��2Xo0���J��'��C֬� h:��P�u�=ȕ�!��S�c���
M�L���:��9���,'�:�|��AQ�T�ދprä����E�y�="��-�:��7K����ڦ�ұ*~�qh�6�?�����6���yrg�u��� |�ٕA�X~8c:�`H�U�O V1P�/N3q`2�\K%Xrf]>�8ş��'t�
��mm�������R����l�x�9�E����_g�h�`M�*e,_v:����0��v>���%�S�R�i���(l!0�L�(x?�ρ3�~<��_Vp��'b�m����%҄?�yj�}A1+�c
����8���E��Q����Y�n|�pX4��Ng�9���K�[��d<�5�Il�F�̜�T���M/�m�ј�c��c��'��J Me�ǩ=���C�8�	Q7�Hx��?�����!���"b@nwqNA�����&��0PL]�ۤ�	�Q�9|�PsA�t��tY;Ĕ��S�ɾ����W��'�|�    j�
�DBKv<ڰ��0��x�����1wL%�f��1IxL�0H��Y��O$Jވ�����c�Ga*�:�0��=J����&G�����M�Hht��ʃ�՜"�`�n"9��Z�m�v]�s��Ms�È^��DP8�C,�u ���ۃ{x�Ǘ�=�~��J@s}�t;��|H8i�<�gTW
���bЍ0��nD¸���Ud���`�}�]>����32Q���s���$�#�3w��B+'g�jH�z7�q���Y�?C�>�ORxW�f�������!=�2føab�t��(Q����@����#��(͖�%U�b���D�Gׄs��XKU����Z9\�0=�}����6��w�qtx�O�m���hVk�Z��u�K�[VV�v�<���T�Ɯ4i�}A:XeIȮ��Ō�����K5�� <�ҁ+f���x*��g-�E��am���+ފ�2ĭ��A��ά��c@�Zy���u@�ܲ˽Z	^���G���N\K.3�g��V�M`�R��B�
l��:u�1�|l�c���_~Ǳ�[�m3b�N��G���Z5��������a$��qe��r���9Ś�H>��w�rL������9Wl�+Wۛ_1��Ԡ�x�4Jb�.��d)N��ٵ)�qd��'(���c��Եb�p�K�D����Ά�<ܼÖFW&�����V�o�6��	[4������ "4�gR��f~d3W>$-�FA�& 
���n2MUD�v8\�b�g���[����lZH0"�;�m���[�����߻;�W�C�%�b���j4)�&M�e�]}��͵<~A�
-���j���%�\.���h���t��"��J3�2���w�����->˅vj��)�H�1�)�i5=����������*� �(Q�Ib$�=�ɫ��Zl�w\�}��L؞d��"Uʭ�	���+�q��cU������ЖH�
 N1Δ�
&�J"T������RK���IL�'A1�kI2��2l9�ʆ��6�u�O?G�L�������걯�l%�m�Hvԝa�~��M+����w�[��7%�і��w7-۾�P`��%�(oh����_����ʷfӀ��H�	i|����>�a.y�����J^IW��1��B�LEB�E
�6������J�
�c�.�r�oq��_��<�ן�6q7 ̜��t��J=���!�f̪�rj�;���'�����|����j�3��5�Nk�F$P�lN�K&h�%����2�H8)ʳ�0J�ߦ�0D��VE|�Đd�K����5��F%��Y�4��i��&a[B]�A#��D�"x;M`U!�W���X���E���qօ�$2�`�M�+����������+����� �W�{<O�~ҞT%.�l�oQ/�,����e*
E��HV-'"��`��Hu35=z�^%2ߵ��}܄^���Q�֌�%�U�� �w"B&�9��2G�p6���<&��{H�s�۷(����/�E�Q��F�f�8��=4��G���E��$7$XO���g��3���[s��ْ���*����P�������4�M�6"]3.��EGrT�8����H/S^}=i��|�k�1�G��
�6����ZN���gY�����L�1���GB�qx�\�걮��7�תJ*̸P8sPnh�t���תO*�.�ꠋ� �����}��two�/2�I�FSkl�D��;���X��a8ɉ�К��ݤ�6Z�L���zB֟�ş9a��I��p]MX��Sf1d�%��4�3�I¢�Z��1�{U\B�0t�S�"���<Jbs�^��`*v�C�D;�^�߆��<m�xv������P��բQvZ�6"]-��' �^׎`0�:%H��[�xKIO�����J<�'��d�u�<�-�Ǘ�ǧu�o�.�)p��	�a�j���>H=[�u[��=h���\,99:"]��d2�� '�x+�O;[o+T*N����F�~�B�A%p-�t��=8A�D���ɉ
}���K5y���������Ӵ~D���	�W����;�[PG�v����5�-�$qP�~���)�O�<.kSzC�8P���6�_��q�O`G�Xb/n:n�m>B0���̈���uwU�����u��f�!�ZwϺ�1�c��U��P3�}!M�-�e�r������5�e���C_-r���
��t�Z"a�o��M����zwh��ڃ�y�ci�ȳ�5�D��X�$��k�ǁ=$�I�����.j,�Lli���Ʊ-(zK@�f$�k����ɏ�/Ԃ���Q��~�Jg�`7LIt��O���2ODlWj`�ΐ�K�!�J�n�:W�a���9g�M>�j����y`�IP����s�>l����S�^�z��6Th�g/�&�&E_7�����cx�y~�+S㮗���@eK�1�1���H�eY�+E����f�t�R�`3"�Ŏp�)0��.���"�!{a��M#��g���1ɜ��+f�>n5t�6>o�λŗ�/N��\K���?��L�S
)��"Ա���b�	3�����04�5�1���h��%����*�"�K=��f���͹�_ʍU��fHv���f����GF���}��F��9&��z������ows��\Z��)���S$�)�R�3$�ޏ�<���gs���I!q�����v!�hq�mo����,A���xF�s�z1S�������v|�ŀ��tHo�X��[8��}��
p��J����#�p)�m?�\i�whޤ�������w;a��M#�H�{�����+��߷X-�ȠL,�á/y�N�9w?���˿!�Gܒ�oSܲ ��(����J�;�$�Y��D.>��?��2��,v$G�c��GIȉ!�����ե ��ΰ�7̰�qg%� o��TU�䈄W?;>�:�)�M��(�/� RV���U�X}�=��~<�W0}�ڶ�B��k;2jkR��.��afnw��ַ�(%E/k���G�+m�Y�C����)M�X� J�lV����1ZV��h��)�1s]��2���:��7u�	��L |�^"]m�a8ɍ�ŒXk�<�J�l�v,�C�y��O�`���T��Ȋ!���j^Ry���4xfp:-f�<���{;к:�1���	8�ϖ�A_ֺ����,�Jv���8$�|�X��F+oVΝ�ƪ2ͨ��,)x��a2���(I�F�
pb���0��s�*�-��oO�OZ3�7%	oh�����5/*,b���M������Ll)���� ;�HB�#���g-x����`R�Ba�	�MA���-��#�4G�t�l��&�/C:4c�V?$]e�����{����^�б�5y��sz�3$�:�o���V��kEu��="�莮��X�z̇j�<���������/(MT�@b��|_�xf�Y+��HI"��.��A;Y"�jq��M�� l�bX.:C­��M�#-���\Ѐ"j���Q�s�EK�K���0���{��~��0���̂�Ͻ���M0G��u������e:��L7��7$]��p,1HG�q��h�H��̥��L����3#��guS0H7J�a��	7>ɰ4�� �µ�{�0�{g��V�Q�F��'�nJ�ec$Ú4e�u�]L�Y�G+7J����	�q��biu�C�UvQ�	���3ں����i��5����ol�W�]w^6� ;sN��r#.}�Y�V��M��d8r�=�$h�L�T�Lֱ�-��Y���+��7�Y	�Ie+��i�|��X��[���Kd��)�e�{IW�`��F|5�8x^�c5� �E�K'E�Y,5�)!>Mn��� ��!zaz4~[��/��B|����FӰψT%��'�o����~�²%imC+�3$!�/$�ˠJ�62�H��9皁�f��ö��FA:b녧�3�����/
�u�ц
V�𐄁��8�l6��r�8y���*��<�
�pD�uo�v!���M���    RɆ���[��K?g�x������=���n���.y3���O�'�o�o1�9$E�%�$��� ���O^�\'A����]fr�d���I8�A&Y�u`|���*L����,F����Q|c��0N-��\BDb�[ޗHhZA�E?�����2�yQrª_��y�j�O`�1��aǵ��I����2#'�	���L�ӭ���.tI�L����.1
��x�����	��v9�	���f3�a2�g�M��4�>�Q��uBHF�bؕՌ��Z�U�,��T�nTc堩}�dKu}K�.	��� jp�#�Q	�R����5��8@l'2�^C"�F�l�:ߦ��hm���1	��˟
H���r6�6F4�Y� ܀��K�������Q�#�y�3�]�.�bc�K��/�Y�!$B��%��Fl�J�O�$I�tOs�����U��o_=Y�����t���̣;�ZS�*�xԒO�+NH�ĬT��cF"ID�0�������f�ey]ßJ:n��!���*U	�7�FQ�,PƐټ駣� #��M�Y���+f����N63��R<	�'�D��ۮ.G��b�0
��LM�\]!(G.���w��L���%@E��j�RA�I}�[LoC�<����AtDs��IWC��1���!5��R����yT^��TOӗ*�[�����vǗ�?�.j��2����@a�u�#g���;���:]8=�eL"gFOm���v�$�/WVMEeΏH�^���n�� �I��W�P�<v�Խ��u�u��o���#����F�����!ج ������,T��.u�9t�{�(."{"uf$���2'k�y�u�]���m�ۼ_~�b,�� �	m�Y))�(lLzl���1&Rt1ی�n#�*I,"-��R�qK9���A���@�'庸:����j�;ct�
���/5;T�1��4���,���������ˍ�M�T�!���d��[x[!:v����h���=���ˡ���~tʈ���ŷX�vJ���n2�L�r���yK�vI��2K`���Vf�gf)N��,<�c��$�$&!#�Ë�3V���?S5��' ��Fqۈi�iD��M�p�!����s<'�hi-	�Y��g;�h_��SE�S�F�k���'����5ª:�;$�*�`�kq���x}���v���v�r���RA�U4,(��咁0�f��u] �6)�S����I�ԓHu�a�\}���L�Ԏ������ۺ��Qܾ����m��7%~�����䮰�X"!+�vj%=Ǹ�N�D�Ŵ�p
�q�xkk���řִ �'��� ��U��_ ��g�{Q�o�?�,��R���!��.W�G�r�`9���2$��HT��m��!��]m�_�-��as�1THS����*l��ʯ6�'�4ˤ*l�� w�:��E-���sH���'r�<\��}n�o����S�H�����J��.&�hN� r���z�k/��|�gWṷ_`DIj+Џ	�ͬ�`"�U�s�%Z3ވ�"gi��u�� l��l����2:�c	����H�䑵У���C���eԧL�.�iD9|��j�	�3�z�gJ��%�0<]�)�������>��eܱxv�;z(��g8���.]t�}:a�!X��J�Bq}�%�x�w�#���$f
,E�T#�HW�M6�&��`��Rl+�����-��[Ǽ����#��)"4�Ȑ�o>\� �")#@1���R"�����ŔS�؂�5�4��O��'�)�4�$�
����æ��@-�p��������G��8J�I,|��/�?x��^���o�	��i�ͬB���{������x�!�@�u�� �4׌Jf��	�Y��#1�Y�>8��M�U�Da��_����`Xl�L>���Bo�4Ⴃ}n,é���N��HW��1T#pM��|��˰H�u�a��m�B�T�� �����?������A�����qs3zz�6u#��B��H�z:U�;oI��ZDf���dp�W�wY��%#����ߢm�vqL�g�����5c�9��k�8����ݙj.���>c��I��h��8a}��t�ƀ�\��Įa�ǈ�f�H4�q���x�|PҊ%2�wX �Q��Z�dɴ�BH�g�`��J �����^��{0?>�����+F7�I&f@�/$T&� �vUZ�꾘{����n�G=$]}�Q��z��Qj�q���T&�v���� �3��������f����W+�pl����|���O��� ��i�/8`�w6"��)}��AV�/�M��Fע�ʨ�!(�X5}q#,b��5d�%x�2"�\����3%� ���{�9(��4t�>C�t��)��d����4|����D����Œȍ�:\sMj���,&�18p+zx�	,���8���q�諸�ߞ}j{�+z��d��b� 8Cj���S���e��s��#^PF����W4��Z��r�����V�5x<W\�W� �g�a���X��ERs�G<lۡIa���,�&�G��z������|{h��pW߸����@|2���0��PjʵkK@���@g	D���r�4�!Uై��U��Y0�Q
�(��;����Sp�0�j��3�!]U��XFHHp˹��3pjk���.��Z����)�����t�#�UG3ک٬˴oZ"�o���:�i�a�B�~�0�H�v7U�rH���h���
��\oW����ó�U�Ő��0�! ��Z�'Dl�G�r�Dk���V���>������f
�Ub�2.����ى_��Xo@n�gH��c��:Y����/FhH]�d��tC9W+�Ks���aXkҵr�h�.�43��$#	&[�J��U�c��n�4p<������,Q�~H���!(�P�>���F4!����D�&by��눥�`��;'N
�"�h*'�1�If�aj�29.֗?�����a�?,�K������pC�a�����q0�\3y#'�R=� ��j����j�D�S#� 6�$�&�H�)p3��U{���#9�И47��V.ζ�y�_����Fۿ��R*ʌ�Tq@�fux��5�,$������*�5��#��
����sC��
/�D�ޝN�&�7Ǘ���$�q�ۿ-�t�B۸�����_ܲ�8�]��ie*���Yo�i'k��x��2��ކ% O��Dƥ���d%ƃ�E`L,z)�)����BN+���.i��'�!�(o=	�"��1�L��$�U���#(G#�%
��+�ǫ���ɓUF�>EUpP���N��4� v ����FE��0��冱-C�p�L�����[�el2�{a��!�5,띨_f��d����a{�Z�%�期"P��`4.��	�,3`�9��1'±�.���Vg��RЏ���m�%IkC@�9�� ��ң���c���D
�?Ud��\q�S�����GPP��8ݟG9�I��p�?:���"p��!�"��ژW���c)E4@����0GPI�lW�uN�\��?�C���	LEY�T��!��K)iq��# E)���,A�6�jUm�s�_�'I���j^	�`�T���t�ח2zG� ��\0k����/k��}t%�ľ�S<�y~�nq&�Ņ���g����"t�K�k;��e��p"�Ɉ�D)e�J`4.�zY��4h�ł h���-b<yoY��d���������t(V."��-�f���rӀ�D���&
�o�\?|y�0�1��)Lg���[̚�ӇT�C��Z��{,��[1;��]:�8�ȿ�<ץ�)��y"�ܿDN��Ѝ�K�y�JQ�(�L0��]�[��Ŕ|�!P�ǅ+�>r�i�@���R`sM�![댚i�������Mcf$��r�_dY_j��D��M���=���ϋ;����s¯���T�����&�o�%�5�`��c1!<1w���}Nܨ:!�z�`    �%�aOg��y�CY"�4��u�y&>�X,X��C��6���)�����O� �~I�Ф7���|����� .�`�SV�jWCR3S��/)п�
�E��	��oZqΐt�s���g�m�@�d���S�pʄ4���Tm��8�	ls���?�\���:�k�&.�wI�T1����l�w#��z�4���)�#Fw�b�V�"H���XF_�Rxw�G!��j��%Xc�U7���j��h���Č��b���*ɠ�Y���L�0{I"w�,eB�mw���~���5�6�?wR����}��FS��.����7�v�(���n�2bPW=C�휰�u�ʞL�qҫ�IcWʩv%EX�mKYޙ+��)�����|��*��٦o��W�z98p�&��"X��1]��H_g=e��폧�*���W��[m4�N��O���5��eBi�c�s�/e����[�q����ɹ{��,��chuOCR3��d���Ԏ�uqg�W��/B���	�Q�߿�U���Y��e��F��J)s���J]Th0������e��xN����I�Ϭ�3�'R�0�b�V�E��b0kN��*(͓H��6��Ѭ���3�(z��������>��	��q�9��,�#I��?�2�#"�͗H�
. ��,�p�;�(dL�����5BޥĥY}9?�����d�ʄT�w�#���G	��NH�����^�é�p�9���=�\m�Z��׷?��k�'%�է�u䞓@Y&���G[JT����bT��H��U�W!=����SL\v^����Sb.�{S�_�2������yg3�TD�� 8<�hjH�!� �I�][�R��YuW�~�����'v6Wq�ߡ���1��O�ݢF)gdC�"��-�;F8�U&���\0v��[�$������Y-���҃ߛ�q�B�ͩ�Ӓ�i���;��NQ�����d�A!O�&������ȉ bJYP�9��(A�Wg�?:y '��v����/gH��YAO���:b�?�&ǀ�]��T-dy�8��Mof��� 9׍�������Y�T�����$aX�%�3J����'�&:�*��}h��3.T��v$A����>w�9��ܟ/���v�2������o$��|@���!��<aZX+_ +ё���6.�s�cZcq~:�9�٠� E��XS�\���r�z��cmQ.�P�ٱ��z�4 `+�l�x�^`S�� ��W�I[���ժ��q�{X����\�(u����j�DBɋY~KY�����в����4"a�lQ�p<�X�\����S#ؑ\D<�C��J�wH���`���G��Pj#�ɮ�\_4ȱ���{U����^$�F����Ou�z�����.bt��xN��*�{���n���&a)����I���~�x(i��Ct�(U&�&n�A�����?yo�$�qe	>�_��C�I��]��@\ i�@���i�53����X f=�?�Η�=j���-�Bqj�I
���n����9;��eU2ٌv��DY�
��YS,.x���0"M8��u�-��!Ĵ�MQf<G��|vG�н�����t�
���^���HZ+s$����M���f��	���E�U�d�3��u�y7 DC�{�5xT$#G˘"��-N.��8��~\�e,��9:�%�dt�9:�vDhhX�e4�KS�U,���^�3L�bHS���!�r�<]hRЬ���}��p�)NPK 3�f:�dr3�2Ṟ�Ǿ������c�xi}��_���#.�e���R¹�u|�;��G�b|iQ󦸍޹d�P&Od��r��pՈ���qH���]��/<�CA�U�Yۥh��q�V����C���)+��x�Oꎣ����f|�X�"�>�ȡ9�(`s��!���EJ鋘�,0>�Y�M�d?"�dS��p>Hl�rӆ�"y*�ݧ��mz{��w��ю�&��=~+ǈv�
�'��r����JAL^E.I &��ql����H�p�7�����/���7�TP=i�]6��T ���Vхq�D�FdV���V*�|��ptv��Yo����f�lM+j5�jY�V�q�4���[rV�n�c�D��ޝ�Z�Q%Ǽ6�4$��Y�@D����.��꯳��v:}�G��p"=:"�lz�kK�0/%�ѸX��hs	�p`��1�ь���Ɏ�W���&��I��B���%K���yRS:�eڟ�$�V%.��N�V�^R� ���DX�U��hH��FZ�˹N��#��h1W��n���n7��]J �����(�˘��lx��w�q��/+�irpmf���B.v�{��ߡ2%Ix�ZM�+�ͷ �2I�D�=rJY$�Q���*�c&S@?׉�C֖��)��D�b8�f;����CV�C���E*�_?��O�C����񫄤p�].�L��g���E �� `��5 &뫢�J�=Ve`¥i6n������_vz����ֹ)ϊh�X6Y�k[#O�fz�IZ�|)%��6�܃�F�t��Aww����N�W��(�(�ș�������+H=��#C��4��vD[EU�2*G��p,I�'Y���q����v���%��y���Bb�x�Vs�'x5�ZQ����0�f����8�#���1	��"����{�v�+t;\�I]d(�`���%v���.��|��U��Ѭ˭�d��m�D\�La�Z�
w��  ��jلsN��tpί=��'cJ��Έ
N.\۪�.����H��,=�ߍ"7��"�2Q�H\g�D.?��V����\���h[������滾ViQ�S�M��VDC�k8gr����ߡ":wN1ۨ���َ��p�v���7VUsu4�0��DncWLJ���>t3��24�3�e�9��p�ay���t���$}E*��R\bkWs�o*�Wi���u�ߝ��UM�]�N&9L9Y���KQ���R��N� f�Q��+6d�=E{�v^R��fotEg�H�.Y:����W܌$�W����=|���?,�W����ޡ�간�\�2 �gh���Kі*��$p�-E�<9��aV+�b3˶,i>���b7_��\L�v���������c���Gj���&�q�ٺ�����m�+s��GݷU�%v&��Q�;Ѡ7��|��}P�Bg%��fv:o����pӄ�rÓ��)�$˲(:�VA��1ր�ސ�n�ׇ�G��)��h������	�d�<@I�'�3h�6�=ʔĂ�h#���䌦x#�gV\�-�V6�*D�-j��r+�../�_n�����Ҫ|�����O�t�{C�g���������|9�8!܎d�**n5�3�@·5���q㸠��KJi��R���F ɏ1�Et&/�	 1\b>+�<Ni��ʎ/OJQ � �e���.#O�+�@0K�����r�գ��4A.G������؝z���\=�cr������ŗ���O(����f9 ��W�.|G*GO�+����)f�����ٞ^��EvdL
���SѠ��5)����.�N��K��b*�a���<�3��2�=y��4�B���3Q{C����,M�t�H�@;�H>���d�C0ii��h椺�s���>��Ȏ��Po�	������z��w�O��)�/�u!�3�q�D{��r!��p��;�B�T�q1�^	)�ygqw�Ij�٧HQ,�k"���3A.�r�F$%n����3�BV|��R��"(��D�K�x&�EpX���ɕ}���:f"[9����\�ǜ|�{����eή|�Yt�Ef��q3��d�At����}�%N��J�pŎ)�o�~�/�L�6�� �U�ы+05E�0WJEv{��9`j����!���S<R�f�
�̤�	�yl@���5�Ӳ��K�R=.yppE@���(mP>丬�5���y� �w�&�HN���SNs�{9M����i��0�-%[���������`h39�\xz����0�\(�A�T��F3;��
�6!f����Y���#�R��mGzu�    V��n�CY���3o�MΦ��x�����luTs{��W�iUy AZ]��L��q*���-�Qs���s�%Ү����%3>�P�!��8p�$����4k�֡�Ņ�ӆ�hk�(����&3�ѴG溘&�.I��Ӹ;�(��M�H����Zǲ!��^¶�r����Y���Js�G���-<��HN~;ό�H���`��z�%�uW�T����Eq�����<tE�ko�h���S���
�����o@�u��/Y2�Y�F��zq���U� �-}�N�r_�R+�t��u����=��+�ɼ�G+�������;�k���$g��h�jF�1�
x�辥@Q/&�O
��\�#q3��/�������Ƨ0O͔q�쉶}�fϽ��IVP\�T��_���`Fq�]�@An��^sE,f�c���!֩��ݔ���.� W�@L��2S3N���ca������SWR")��]˘���V:��au[(�'SM��� ����)���Q5�~R�D;�b2����d��^`_��!����LÞ�ZV'U�h�{R�t����p��{��C���z]�c�����lk��6���ͱ(�&r�����{�K�G䃳׾�1�ׯ�k���'$.g�͌��u�wJ�Nnw �WTq���f^F?�[.�E	�	 ?�V�IC�����%p�e��3g>IF��a�SW�������X�}�r	��tס��n��xa���j�1�O���mL�'�)�tk@hJ&�)ZsL��+o��^�q����N:�!��ۻO}�:\�:����垨Ǽ^�F�C'�4�i"�!Hd�uZm�c�M�".P=?ܢ��\�����ia��{V��SzE�����g)�؝�5�M�"� B�td���&��9�y]�S��@���;��z�}f�<���8 8�\�a�7����Mמ��I}l���r�&�Wd0�cʁl�?�><=����)�`>`7��+�Z�&A��G���'ڰ�<F@��˘1�e@�Hz	������ YpMR�]~�'�Us٠Wl���p��))*MN���l4m��9d��R��Q\�Al�����~��ۙ�b-��b�-En}"m8��E[m�$�+œ +I�bא�w�ɔ
�l��
E��k�:|����@qZ� M��!sft�R�K��F4`�|7�{�~�i��(��z:=�p$�s8ײ��
���ZO�+"��vRr�?��5p��Jg
����R�����4�s|_y$����U���~$Փ����W��ߕ�5[� �AX�&�fE��]- e�$i`����ESA�t�b^zk���Ї��L_쿨H�Hor!��{��!����}q�C�U���y
t����mg���R�8��5�[II��W*�v�A&����d��x��O}v��ɞ]�b�P��2��uԿ�]���4X�k��i�:FD/j�p̲��.�D[�W�T'm����1�eǛ��DSER����f�圙��)\��A�'$/��*�5�=�'wԪ��,�1�
t�K�5�H�~z���,n9g(GFl��=&�Ȱ�����f�9t5��+��Kh�G{�Ғi�@a���=�nI�U	��$+5NR�@nk�S��2�3u�q������(V��y�^�L!)h�*�V�=y+��Ay�v� �M%�ea�or"��ҭ� ޻َS`۸d3Y&�7�����!g͞Yӹp��E��'1��h�}�&��d�W�d,d�����M�Z��R��Թ�󺦀��T@u\
'V��Ϣ�x�h;�r��(�����V�)zΊ6E���u� d������ݧk��;�,�n{��फ़��z�Eb~�$>n �m�p�PD�(��%�<'�߀i�� JK��$(KG�0���4WjX!L��Xx��J/yYҫ+5"z��T#��Iw��P�4E�O���wi��p��!�	J`�k=��U��(�n��T�9�\�&�eB�[��2�*h�Tr���@��!��N��q��Z��	Q�Q�gR�06�R�Mp0�h�>V��F  S����#����k{9�B��؛����&{j��%�և���qg�|A����5v)�#�fO4�l�tn���as�e�����Wo�eh�0E�t�mӋ���X��f�j!��l�6/kL�#�$�������̄q�w�=QA\�*�D�ZK���(E7"}����a�z������)x�
u���D���xI΄1
f�i8ySJ�k���!�D�c�B
軏��f�߽�&�"쁖p���|���Ү��Ƙ@���^�{k%4�1���(3�,�oF̷����w����<2��N>��>ݮ�#�l��Y�.�4�m�vO�9&�������(��hcM�^��h��R.asZ��JYb���p�v$�Ϛ���7ΐ,H���#�u�$�����i���u��)=I/���K��2RX�hm���	"��Ȭ$��,!0ܹٞ]�����Ԁ^Ӷ��nO��F�P�C�mBy���#EAd_�����"��8~lo�=���q�C���'e*BUgu����er�l���.ZE��%
���̯c���bF(����]P(إ��ٴ��;����e��T�-W����S�딵�-(H�"���~ VBC}F�E[1�8
+��.!*�vY�,t��i�j׵G�l���-�yg"��ΫIig;HE�P�p�[k����^[��� �P�[A�rTM��Qh�r�{�)��t \C�������,|\��ұ�,��ސ�S��hUߟ���zމ<��E���p��~����u�ч�'GTr��1?��J+��rM�� ME8H�5��)V��|�-w��b*ٙh�g�Rh�L�u]pQ�j�E�^�#����򫞼��e��Kf�d�=���Sc'��rm��M,��Enү@��<�[�����Ƚz�a�YA�
��FI��yQP��6�B3��,� ��	��5#�P,��C�__����%eu��Z�'��m��%��~��b�7����r��ܡ�|�����^��}O><���T8�n=���o|7����75�2��ߌ��n�N]m;����c� �}��K?.�>�{�5!}�W��� ����'��Z�vGB�Y�6�<���f�1��[��(=h���ۇOh�����&H�K-���5ȣ�JI�'r���<�X��C>{�ǟ��]z��1[B�{"z=yw.ʷ7�|��
/��S��J{��蕘ȟ�Lu-���O������@ɱI^�<����B~�^Vg"wC�(%p��Q�bm����5Ŝ������F�e��:�ޟI�ɵ5Ua��N8�vE}�{ؕ�噍��6ro5�'A�}�����5��s���N�*�(�~7�Bt�g[�Y<V�c���
��C?>��A�̋Cn��p]�Wnud���s3mT�)�ϰ<�jEY�p�%�֖� �83�����'��>��燻���u��ꤘ9��(�'r��X�A����*�Ƒ��8ø�%{���5p8�Û]��](���i�p:�����`"�Ow�׫/��G򦹴{�K�5);�gh:�٧���
Go<v5m���u��C�3����r�i��ڢtYn=������f����*y�pX�kS��m㳍�B9 f�Wܴ�$X��00y�X�g�*��+�W$Kn�#eژ��C�&�0h���I�25���w�г:�"iŖ�];ԵAB�z~�?�wt�����Z..�LD�AL��A9�[7���#iAQ إ:]����:�Y�[g{EK��.?�OkS2}���S��������gH��������NU"%�8���y&r`BXQ"Z���PP�m0���P,��
K�-��v�^�j���H��H�����Lty��)n��)9#���")?<�Y���-���\b�oOD����B)RDɠ��I���I[�����.��I�̱n�nǋ3; �=��ό]� d�
32���Bv��L�)cK��    ��-rs�~�P� Kn�e�B5Ed���6,g��x#��W>�Z�!��"�?���x�����X�>z����er`���}y�f"�I��mFk��q��G�ot&�/ɔȖ/��0 C��4����ݧ����B��5]��w���0x�ʲ��.s���g���2���.�q��m�Oƫ��W�kQ�͟O�.Q̷�?�����tw?�"��}���*�e+՞���A]6U���r
�N*�V(�*.�u+�g8��D<��Q������n��[�鴂��R!�DÛ�;����w�:�r�����:g�������ϋ9�k�@�$�'��s�D[������#��|�2m�9,A�b�`c�)�������:��]�d Νs��:Ӧ0����0
p�=�n-�e��o�&YȪY �:��g��;ѝ�Y�-�Q%B�C[�����Il̡Y9fڿ:y��t������q�u�
(�#y�V�=����Ʈ��;�q�@��� v��XIF��W����h��b���؟S�Yb�1�uSNj���Jn	|ZDNnS��e�G->vބ��S�ݣC��E��М��Z�@��i�/\��֥H)�� ��ȍ4��`JʻҊ3 �0 c� ۠���׷wwt������'�����qkwdm���h�$S�ϰ��|�\T`&8I ���}�ք��~D���C[���4�D�y5 ֓4���m�Z�;n�.jVC8�Vݨ(���D��M�'Cj�~̻ƨDa��*j��_$&.��������OO���娜�\퉶�~%�a1�$kX���Ma*IV�Z1m*b�Y�ܬ?�w�l�h���]������3@�B��x%dV�k��Aa����������1�)�����u�\�-�ј]h/���C���J)�����
�����^o �
ˏtA�E��B���΅�'/��/�}�)9�ŉX�u]�99�5�L���yۓyԂ������ё9B�<`5\&��::�繎E��{ B:O���Hc,]3�"�b1�#Ԉ�6 �=m ��{e׏�|Ȼ{�J AƋO����v�	3��"�F���th|�M�*Y�饷7�����_h�2�����=|�S�5���&��]�~�CQ���e8��.��L�#�r��t":v��� ����v�NC푼b$%�I�*Hcrt{c�����3�@�Y�L�,��y9@#F���\���tC����}�����������',���)�����6��sj��a%�\Y ~Y�u�U�n�L�f}?b�ŕ&��gt�>�?=���8�?�AD���u�Q�;|~z�x�sn�׽��3��]�śȱ���.�gP�����K_�#D�)���3�� ᘲ%�}����k��&����p���><~��{���k�,ґ�����ȍ�똼��ehpz�[F1b�y	�,F��������EAwW��-6N��e�Qa����F��L��C��.�0@) O/ҕ.���@��8��|�`����Ǐ�O ��S*�+�G�g@V� ��{���1�X�2�1��f���aI�E��Ȼ�q���~�_���?�����tÅ���=�
1V���J���S���7ȗT{���+�#r5&�0ևMn�D[�+���G��젥���R�~G�����)�X�i�lLS��M��%&��qˍ���M��e�|��P��;F%쪜؛Ϟ�NHo���t�s�}�����?>����ϱZ��NU���)��w�����|u��I��+���������ʞ&3/9]
���.E�Α�3qͲ��#�x��Zm��r��=eB��\�On��]>�9���+J�/s�=�����Sp�w��؇��$��&��D۲]��;Bَ�	��+-C�5�I�#W}�Lu!�'��'��~%U��Ǹ�j����d�G%���"�.� �Fp�U�Oḡ�iE�n��(����[�$��Q�D�m�*� ��M&�A��o����}^��]���� ����i��������KFѱ&Pl�/|�ˁ'!�pi�k����j�_f�ArL�4N�=�;��+sN��������k6�i wV�k�e� G���		O8��ɜ\vˣ4$&ڛ/��	�_,8<~q���rBZ���jq̴F��l�L�n N�>�G��)Q9 L�o&�ܒ�F�aVyޏ0��#9�29gG����G����ޥ���:��#8��{d$0��Q.Q�dB؃Q��=r��k�7��M
�9� �M�yq��雯󓇿�/��#�	3M�/E[��v���ƕj��t�� SPSL̆��
$v,�o~�|���
t#��T+���q�?ܦtWQ<�]����L�xA�g�W���j���rW�)r1(a�I�囍t���睹�Vc��<.`ݷ�p�=����|*�.�1&5�A�2b�<g9�ӶS+aL�������:[u��R[�r\v׳3��Y�/@�ko�bǶ����D#�A��C ��/��=j�B��g*K��(��
Z����?���G��xw�2dn�*٬�+�y�[��/�t�
��~����t�rAXr���`=�S�`U�L*F-�R���:T�+�KG�*��Lk�+ڴ��Xb
�^tj4���ML9�s^�;	9���T�k_Lë;*Rn�����p��r	�#�
��xT�9>3W�8K6���<��B7;1��0��Us�)�V�E[5�H[&)�%�Lր��Oh	F�eG�l/[p��Zp���u�}1��~�N�����k���?uN��PP"@A�*Q���\�E�ͥ���#�
���^�9X����/�	�5R2��	w�#�$���� (8�4��� Ts�)9.�P���_ժx�z�_k��8+v$��]�b�JՀrC��+�[MW�/�_�o���F��gi���v}&�2��9�-(��|6(�x�4(�յ �5�z(���?��^1�²�%E�v_D}u|�
4/�ӿ�0���kHE�D.��y��6j�-YGG�qȒ�$� =�)�n�S�D�Ե��0�@fO4�� >f�E츽�Ǳ������vU��V�:�=�&}N�<�&��� R!�,�fVK��3zd��cn�ǻ��������.x��ߤ[>i��u;:(�f�8�#?���9�Hg��0���,�����BQ�a$h_;{Jr�����W"-���mj�z&�'׷M��-�}"O�NF�4z�8�B��c$=kr�O�T<���k'�dvQ���\1Z!'���R��=�%�e�%�y�����W�d�N:�VDZY�3�����He������+��V�j�X��{�Ot%��j"Ny�~9*�"jS�b���M�  p�6�hVd�th�`�v&KC��t)x�{�:��(��^#�h�	���;�����������4N�����ؚx�� �'�tM$�+��cF�ɛ��L^A�ې#!�m�)��&ʘ��L�eP�����a����v*��`F17���R;�D�ڙ�W	�i�!QXi���b&E�KX������������P�o�A.�0�׹��[�'r��mi�O���w٩&��b�)*�|٧��fxy�3X����ھ�6�� cI. H&��m��Y>���
%%9MB,�3�'%r���1��]hK>����xN��ݤHR־����ޱ�	����=�F�KA��]��d�����&��ڠS��C�����K�W��RZyL����쵋B�2"7 z8Z���Ԡ3ѠC{��G4ʟc�֟K���Z��:��t;�~)�F
�c_��LǼ^$K���;�Hhp�ʊ�1`�X��T��ڛlrC�h����c�FH���D}�#X	M��d�����`��KT)1�!K|�|x5��d�l�:%/1�f"4��U�Y��"�NB`M*\�m��Fo�D��cW�s7���s����V���y��N?>����/����@��?�����Sy:�>�˿������V?�w��������t����
:�����@Z���أ�V�|O�Fg}�Vf��9X���-��t�@�ń�v��N�"]��i <    ,�h�$}&����⏹?rU/���Eg�f���>�b_�q�s|�ѱ�l.AP�S�ˀ�/�QCǇ�;��'/.���[��9z�"�U|���d����p[4�X�k��D��u�V����.*��j��fF��á�vhm�v���-U�e{y�g"8	�-u*������	x��w,�K�J��$�'�b��<�شa<:%�����v�i�ud�~�_�91��Lv��
����uB!��Q:辌�H��k��8����D��7S|(��9#�dAWi�2r]�cuq/��j���� 7�	`G�Yh˲3��Ax$�G���_B#�i��p`��P�eZ ��]�&܏��s�k|v�N���ꗧ�Å�؏V��T] /rZ}\mM�Q�uS�ȃ%cOt*I=���;�-�3��`��Y�2ҫ�o
.�@����Q7�M��2�#��ˈ\���Zx�[�����3|�բ�G<yc'!��ǡ���F� ���z�r�t�z���9Rl�OӶ�_���Gҩ�w�����`��Ϸ�~�sש�>����+�3�	vtV,p'���8��:����:��5����V��w+��CYttu�\�!ZI+��1����a-�\�������56��h�C�.�5�5Z��3Q�ċ�[(
5У�D8&�,�]�Я�0�$��㝿���]��C��;�Z���D�J?lʌ�-=��fA�!L�^��r�S�a0���k�tg϶ʨ]��d2 /Jp%N(�F��_����y*�zG�:��O��ˬ�E�[n�e$0�&L�z���_8L��?����\~�re�i�ٮh�ʒ�m-��I �#?�g�t���c����ފ�?]��tL��wC��#|��ݻ7�c��Bv�8�S����T�F�m6�����-F�y��m��f�X�׼]��d5=)� K��V
؇�b=)�\<y;{=��%�4A��H����m���r�И6��9��×�'�+	�$)�w�͛���b5N�<H�$�J�%i��_�A��pnQ��jp��)���)��rw�)���+���=_49]���iYj[�tP�Nq�.�g"�v��	����
(��6O��M���qΉ� <��E	<��@�L��6]N�0p�R
ʂcNJ����R3�Dg)Da6�]\�e1�їjr�sH�+�md�]�l���jh�h[����o�Xn�T�yŔeo��bS�N���~qM���)���7/����Z�Gr�\+�D�>���%CE�D{�k�I;i|d�D���fB0�T6��5Aa=� 1�eR��j��;���E�]W���h��BL�ʥh#��":+UC~(�=r���}�Y��Ja�I��ߣ	��^��Ecr�v�BR��C�A� 
xu5��.�%h~�C0��06v���+�_��by�Z���-��bI_Q�Ma$g&7��3E�˘��b�cP�50�#FA(9#�� �zYG#�W�uX/9g���B�����6hQ'5ib�"��WI��ң���/����[���`��|66�Y
�(��CI[C��[N�b��c�޽����.����DTҫ^%�|x�	8�w����Y3���u@���+� x��fGx��m0�+Xn0�H��ӡW�Q>�,�a���h�^T�W���<�ִzQME�uZQ����bh�C��5�<��7A�0w+-�B�� �f�ak�T%"D�o�^�m%vtJ�Z���#'��C�_kw�Y�'B ��G(,E8C��Dn�rh|�����a(�l+�`��Q���h��,�(��!�=�ΊFJ��R�!)��`l�j9���-�`�\�q�v��?u?��|X��a���مv�à:+���|��E��c�N���}��px�ڪ�Y��8 ?L.��_ۀf���%�D�� גN2۫m�'8�%?�Ҽx ����v.=����8}��I�-n��)�\��������e�����	���C��������i���Z���Pdm�D�1��ѓ�~��RO�6TJ��5?P�C�q�,\k�?��Y�gk6�BO}$�]���d�]H�,��ΎH�n�q�����Nh�Bɾ1u�)�.Ղ\ rjBm��{iy\J�+d�n���$-�"��0��,@���,-:y�h�u�W�<3���E�5�I�Y�����5S\(4H�����J��5�ՀpT5��JR���Kܻ��[@��s�c�%j|���遽\�A���t��n~�W�޷����|��b�)�������d��E�.4��L)��jx*�P��Ͳ+H��ZvS/.:�&D�]���|E2�3�Wo[
gWJ�gј*[��N�(���3M�!�hW����J�R�ZI܌�W}��\�=�61h�����_εh$T==E�n�H0m�!�W�y�֜�<E��tI���Vy7�&����[i4P�S#9�K���l�M�ʎmw��T�M�ŇL�}&���-��O6����*uݒ�CQ�^�ig���� {�BJ.Ћ:���"#9�1��3�*�5�?�Ud�}(P����#m��<���g2�?8��S����^T��L�6_����"�)$v�k���/{E�薵���?��9|����WM���	ȋ�\�S��"���ʍ�9��&������h��`fuaFNݫ��i-�9aV.��f�mi3���B��pK��e@2w֒[l��*i1�7/�7V[E��pV�/���:�T�Y.�%W��l�m\"�0��d�}�e$O�L�l���d��R�����b�c��9|��x��
���B	�h4�H�����ѨD~�H�Rhp��(&�9×̸Zh�����C���kP�Z��n&�S�kO��"� `*]� P�`�6�fv͇ ���88`9�>����z�xE/�A2�%�IsY$��6��h�$=�9�̵�}%w�d�u,{9~��î�I��A��T˼aI���^RNG�B��6g�D�x����xv�(�|��$Z��"[i�`|�8K��tKnX16ړ2������t� �v��3Q�%^;1F����H�7��jt��Ran�KˡcӲ��~:�\<F��t�>����9�ڴN��`�3���sp��k��}|$�]e�y�͕�d�(NS��x&�n� ˯b�SGk�D)@�lB�>�[2+h9�Zq��޽�����F��}ߚ��X�F󉤠�R��D����
&�LS�~%�ie"缈%2���B������?�����\��T�]4q�D����ҙR7��>~���/�q��VI�E�6;0
�� �6�Q\@�Ź.��ͥ	�ÝV�#�Л���Z���Yv��E�T4>��0xih��S/k'�v�_�󮈶��XB�7��e��y �|t��T��z^mC!��!7-�[�W�"y*nOD���ĝ�(k�~�M��mr�Q�ev�0R��6��=��r=
�{���wxo��>�L7�]����~����/��k��Č�z�NE576��s�N֪�����?�t��C����9�E���c��������kԈ)�1�_>�L���­M�t&��}�N$\WhC��l�5`��oO�O��|Ƈt�J/��Ű��啼u�"h�����~nZmidw??�]��Y;0����K
���Y��s��8e��A�2yQO���2���
o��A���:�X
���#���ڬf�WtY1P��6� ?6��X��$�ݤ��	��w�9�,�t�u )a�G�hy$z.�e���~X��ϫs��d�Z��'�P���txߍ�s�W���G:�	�(/�/�=�C��_�ͦ�c�[rP�<,��T�m����eE�1z]h��̙�1K�b�����̃ٵQ�&Q�F�C�bNR���WE���L�_n?�g��:�0.���pɕ�f��7��2�q�KL~�D�٬��[�^���TҊ}Ѧ^0��D��d�i�<l1�$_�%Y����r�\r*���jV&*vv��
9+L��Ii`�]R��D�Ʈ�9X��\��+�1z%���t�,�v����|J>6�I���/Eъ/�^�{6W�ɷ̊ǈd?J����3�v��    7�^�g_'|hHk�ƒ��	a�賦67�}"?��0P�\�<'Ig	ҏw�����_]�����Q��%�H6նV��@c�&}�L�]��YIG!��l���R��5IRi�&rд��9��ɒ�c����)�*��@�����h��k&�	˕��լ����qL$��D�R���{Wœ���jVV��i�#�]&`�8�(*ܐ#/��S�9+2o$p����8cI���A��6,���Q�"�Bj���c.2����mʢ�=���@�W�t��)�Ņ�� eX�ɼ&)ӫNW�񌝂&����H�Ēdb�h�
䠢#�ؠ�~�i���M��2F�z5bC4 ׊V�=~5nV9k�8h�E��8ɬ�&�e���I�O���M
��B���6�?�=u��y���p�ǒ �����vd�X־f�+��������vZ �H��|ww�5��c��򮢦��vE��.�V��o��K���)R��AP�齞Z�#Gd/�o8�62����,�J^�m��2'����|�����֙�P���QJ�ܞ�ל���ڔ4zcX��C�^�'�iE�p���|�Sm�cݫ�-h��#�W������-�/6A:��\�:L��vI�!.��k�h*������cmb �,���bd�h�2��pq>��v@6y�ss,Ear_�y=�LY�d&P2��%�y�,�9:�����;��5�!0KP�	T��h�Ù�i8��7��2�r��,����� �{"<	����C�U���Q��\���+t���h�@F֕5��߆�4Qv�|(Ii:���$X��k��᭕fq맢
ι���8F�J��b��ȡ	��@^�+W��'�^}�@�t�`�$��"��[��e����b@U	d�F�b�p9��'���)����������{"�Epf�U�X�81��ע��)�F����68�ܜ��]3�,�z����y4ii��ך�:���)j
5y������7PA2�<���Ƣ�p,6�� �%���J���5x1=�NIu�E����h�����H�Ϟh���@a7� d�K�A �K#�p���^,��#7��}��zPMd��,997�oHg�'T%����E�z6��r�+�t�s~�|�޾����{����ӿ�gGD�+�	!�V˄r�>�\jvi�P�__D��#��Z[�&��~w
��A�9����ַ�R��q`h��L}VIY��4@R�'�V�WD�>sf)��`��	�O� NK�+?6�-tک�*��#��-�}��tN��� jL��4�7����,n��$�Q"gA.�^|���)E�i�\I������~5��G<�hgvαN��:�8��k[@5��!p ���h;!䕣0���i3m�y�9�.�v{�)�7�S|�+�*V�܏��ڠ��C��q�c�$��z��9��+�c�Tn�?�qg�����ɴ�*�呂��u�U�Y�s�	�Q��H�voG7�Lq�N��(P�DQ�j�pI"�a�6+c���Ez�RMJ �a������ws�aM���9u?3�\^So�]l�i�53ѹ��=�Z�@øGs3`�������`Gݱj�G}~���/^�4�T�QHr�͞ö��[5�����N{/�n���^7|�c	\A;&o�$�#{���uD�:����Y�M �7���oT����K:�����k�L"�_8�7�@N [���J�Q8
������˾/78��&��y��P������t�0����y���~�]�����0��
rdy�'�5WbzN��{��P����~�z���9ȸf$p���Z)��é���Z�Fh
�+ 6�J�&-�ub���ː�y�t-t�0a{��F(�w�/3f��|�km�N����-��l�2m��YD�2S�s
�k��b	��}sF{C�Kw�;��7S��T
X�H�|������Xm�0rƭu��E�?��$5��8\N��?���i��ŃME��}�@�Ր���g���b��̯B���0NE��-��w�~5F��fcNDGi�Ojw>1E�/3�LAY��)7M�B�Wz�r�>�5W����l��$o;�~����ߟ��������:�~���\]�	���=��.�a���?>�>��m���G��?�\*z_軭})��������W�xa��S�laG�snO�>��nD}_��������v�k��;x>���]>�L��Z�[Q!�LFS�����&S��d�*&'ǖFԎ*�L;�'������/�����Zn�ܷ"7iag"z�u"r�)
��9��@k��
�(�*E�����\/�b�ݯ��{���Ea/Ơ?BSԣYSpt���
�ug�F�v��~�����~��V��*#\~�=զ�镂6{D%�pJ������>�_,���s-���k�҃��p�'�Ġ��_���eO/th���|H���RG�:�ճ�N����U�Tbz�9&�~�Tt�6��gq�kNj^��ϧCצ][�(T�|��W%1<��_��.D�MH��Xy�8])&��![�d���̖Fvl1���rN�u!ϛ������w�������w]z������q�y����ۯ�6�J9[d�LI�c�/Ǣ �b�.&�RH��J�j�	���S�t�˶��l0*SO-�~<�+>��>��.���	t�57K��{�&�K4mAi[2zH�ʍ<�J���-�y%;R͂���}�vk��\���v���q�U1�d� ���k���1g��#Yp��~3�gp�Kd��T�풪�N-J~3�f{�!����
��=c��єP��XZ{�����z'����{c�VGn[�w$x�U�=�%�|pS�@��&0�1��[�����Ё�S�r `��k `-:ٕf���� �cyN��	c��� \#%���Zb0LyHM˛�������T�g���"=m��/�Fk<&ΤGE)0���F��~��HB% �~��nҔ��u��w�z�
S^a�HLsp�<71�;+T�Z�U
)�%�/���Y_�?=��s\��+�!�� R�T����P\X�i�I7�a%�����}n���������Vͫ�}ݒ;�^��E�s����8pەQg+wf�]h>c��a*�c���戼*VR�(�E����reΉ�x���|�	"��3 AEd���R��D�G�;�K���G5^5��Q�,�U��Yi��CNgޜ��'רI�)z��fM�Ƞ]HMRx�)�4ɀ3V�Lk��J9zDq(	_�ܲ҅���N%��m�2e�ғ�;��H�d�m�ٯ��G�����tz~�渲H��F�5@�E(�J4݌Wo� y-R�Z���S���R�T���~͐(���M� �gd�9��{+��ݜ�i������ ������D���&��w험ַM&G���æ�YH+*����'R��/���fcC�n��0�./�L�Y�<"�@V��}�I6�rh�f%��7�:0���:��&��u�mh�?Z�.u�L���9� �(ho�(O�'�|@u|iϥ�x���������aޑR�nմ�S~������h�b���}�{����g�i��3{wQ^�3N��S����hM�tm��޹��B?>�'m}�Ȉ�BHLH�o��)N�+���\�#�p���2q�H�<*NA�ȴyK�UE6���
|Ri@I���%����/Z��0�[�,R�=?���
u�i+#�'$�6P��rw	nSu���"te��+�w�1�������b�!p]�n�z}U�w	�
n�DcJy8�CQr����~� �	#.��3�e���5��@��z5(�������Pj�:���c^��>�������i<Z3�v.˨�.�`�\pn�h�dg�c����S�"c�4�mB�5]u�H�g�s,�9ܛ��7�A>3z����0�|�
��{��_+o�<$�{x�ɘ3��3�a���\w(�G�k
�u�Ei�} SN�궔8 �&�� Dz����LުNe	<�Ɛ��6�A�u���8�02/�/��>I��%��L���z�"c��>̿Ncz���$��e�=w�8��m��X��    ��;�������W����>û��U7�syb�K�7m&GE�d��$�$)"e.��b{�DQ¬�{���J���L$JeV2���L$إ�x�+�hw�*���bc.a�x�3OJP�ʺ1�+r���I���X�5�J��P�0!#4G�4��O���:�2�����uG|�]������n?t%,��9FucR�z̝5 ���t����ˏϠ�x�o�����?�`�݇R ������=T��;�����y�v��:�m�(`L$���3w�?��矟Np�;��'4;��o�}���(�!��Z)������2��-*3�e������|�X������Mh�==�~D�hc�-)��I�.?�?�Ĵ��&ҷ~8�Pw�6�+[[�T�S�⭇�i���k���L/�ĩ�s�M�����[�������4��2��bW"�:n`�F1�gH��N���C�d���{7f5Sz�5�"���ƵCj�n��w��Qj�.�L�x�3��
�s�r�x5��Y۶��M����V;�-�]�ۼ\gy���?��*�:�tՊ�(������T�3Vlr_�km��c^��?}��0T���*i����8�C���j'XO%+qT�5���D��Hv�.O��l�.U,T e%+��cin�0�5�W�!d{d�D����g��E5C	�5���Xi�L����6����O;E˗��g�):/��k�����b��'�	�yW 7i)�JJ�,�~��E����[�9XdLrU�Ҩ%�5�v�!���Hz�D���t`�a"c�5"ǀ T�U�X�S�%�Bz����K`�Jo� ��<�L�+n�g����p(Ý��_O����Q�2T6�H�۫�g*f���1��[�Z��Z�,�C�#�|:6��$�yXa����;k���O�)�Er�*N��A�6Z�wR��NK�K��sł5l��7��	���,~��ĹU���������k���V{ٟ0mV	Pg� LC�+�5YH��uar��2���z���������'��%W�P��k�Z��OE�� �(�t�L	� �s���J	6+�XS�����da�!Eʲ��x�R�C��h~����|< H�b-,@�)ԛ"���6ע�B�i"��;6!〼!$3k�*#��+�_�z�V�^)�0V�L|W����b��g���L�`*�����:1�柚�Kr��;h٣%�_�������1F�ŋLEۦ�;�c��t�}Vd�Xf�E�$	��������o҂��!�D��J6�䎘37��!+
\�F3_��`��<����;:�綦Y隧���(�&�p+"<���Z������� rڕ��ѕ��~��c�F��϶���i��剚��&n�j���G�`Z7Jx8��J��t�og�߽�+l�qbOtY��w�5����*���,%�U���8
N?frN���G:3��!���/�}�N�O�O��k����q���و���٣�aK/3;�[�%T��J�E&s*Zd��r{����DӲ���-��E&ӎY��{�v(�;��q1�5��wm�Y[�uAg��(����ZNE�e�v��&H����?�����ֆ>�
�A�β�:-r����=>4O-�O&��H�.?޾Co�O>��J�MZ�ME��툔������F�����b��ݛ�/gǗ[�m��)`�k-�LcW�,Z�[GV6��K�3�����3����i�0g��L�X�p�31�d�]��wZ�xbv�=����I��*C1�����y�	�V�gVd��S���d��C�b��_e
n�9��:��D-��S.݈�#����[���wE�j�7l�,��4�i����ۀ�q��Eak*�0>��-.t���_�=���0�U<Vܹ���ڸ�i�fP�r�π��	n�ť0��T�kd��\ə�D�D/�b����$�����s0=�KWu��V�٥.�����W������z8��J������cU��]�.^��9�R�{�F�0�g��э �kd(1���=ʴ\�?�B�̂�M6�9�9�(�[����׍67�x��:.�,F�8zZ�̸n��)��PK-9�K5��qLn;����k��ZGr���w&"ӹ;i�h�Tt�}c�nd$�X�
'�O>	w�^��ڪ=�{ϧq�����|�׿��X�#�:%δ��LE�W\gh3�@��w�XJ\r����V�*Uǂ�~��&&�U�:��Q��� ��7�ѡ��ǆ>ϑn)��l��c�77>�ܑk:���u��Bm+���˫��a4_k�.�����ED�J���f�mcUl�Ԟ1��=h��*I�EP^���yn��]aǒ7�Q,ĆeVeZK �g������a���)j�H�0"^t���|wͅ���vQמ�p��+*eFzQ8:�� �.�&�R%M�����dh�H��B8�RfN�Q�HQ��rm�˝��~6���jD� �-��\N:�+�\taXI���4�i���-J���]Jy�"V�ޣ)��$�=�u�XU�;<z>�-l-�2��]�O�D5�8.'�V�����k3��43���k�<Ec�c�z��16t�X�}`<
K�oi��+��z�~A�5 ΒEhS|�Z6V������-��DWW1f�7�%T|��"X`I	�P�3���z�R�TT�(:Ò��A����R��q�D�FD�����d�C�r���gyA3sI�5฽�%�����Ef�o�i�E�_5��aɰG!.0�	y� {�if/8�UHHL8����ΌP֘eb����������ԡ�H�L���m���؍2��z�p�J�g�Zh�^>�L��.���V����Z@�O>\1/��B�:��^r�^������̓d�{~$�cp��~�0���H\Fʻ�����&"P�]82&�2�V���V�B~P�A֌5%�U�Jr5���-g�EA�v�P9�D�s!�5p��D?N��]\I�2�y�Kh�����`0���g(q�=|��~����=���*��,�jd 
�;��[d���m;��ȥ�hxA;i�"�a�)�[R��7�2����½+Zn��G�<��}m��ޝ~ �ԋoN'��;b����ѻ�Ry{��٢���x!�	Ԩ��1�Z�5|8}�-�j�jAM[&�e��L��s<�(�nw�a%�" XY%0�Ş
g2����iDRK�Α�N�})Ǚ��_��������q�K�6a�h:�k����\��x�"�<|�����Y_���>b��������֭���t]I۽Y�];�5�Ҫ��š�����'���8�v�B}��^�,A�8�`�_�Bk�1�MOTx���Yp�:#n:|�\w�<�zy7�z��ԃ&<�?Q\󮪥���^ʷ������0%��į�׬,�..�VpivE�&1�!0r��)nO�):��L���8XD�V�l��hjdOiAC����/:
���#):��IIp�x4��q��Ll��7pES�@�����Z�f�!n�z�6~�U�t�=J���>md_hMy����O&)�(��t	���o���bSÌ��Q�<���G���sN���:���	��>u��|��<�S��,�P�"p��u�Co(�&w#qDz��gSd$�^-�q9|�a_w�j���NY�-*���V)��.��#u�x��d��e�}捎�uI���MJH�bu�r�Fܤʿ���twz�����.u��e������F���|���"����#'��'�BX���X�{;�D1�k{�]@��=�]m՞�wEFs5z�C��a�9�Fqx�K)�῵�Wo��7 �#nƘU��Ѧ5��'
rAP��c6�2�$4+�S��D�gww�񿭮�� �}<�U�b����|lퟮ�/�˄)��h�V�:~yg"��Aw]�4��V��̽[��ƕ-�\��BauG�gB!�v[3���dǙǼ�uLV���b�����@(�v�O�f��,y���=Fp��L���b�"���M��h�S���B�z�J֐K�    ���p�Q@T�zF���_<�������
�
��f��/B�C���R%�}���!ҾR1А*fd��-�`m3�z�?�i�2����+�ѪZ,&D6�"�߾ax�忏0�W�8�o=�A%�ʴ��)4�8AOi����+Ha 3N��TfK�j9�du�rÔI7�2��?��Qoz9�e�9i�F���d����Q�	}����C�Q���v!څ"��p�n��]u
;8UҒ�kK|b�pmn~M�<�J���t���;N-�G�)�դ�_I�t�0b�.p�Tr�S�z������~11_a����O���͗��b3=>+Y�2��V�\)��\Xr�#)_r�:--�~tZ�6)t�)���#'i�B!Ʀ����C�eT�4�W��Y+zs�ҮEK/�*E>i��Im' �f�P�vd��ffbp�(O�Ł�\<�w��w,aw�b������R,��tN�l�2�l1/O�;�o�4w�H1�ul���DNj����h�E�qY0Z�ŏ�S�_Q��_n�{��g����Ӡ��]~w���ɗz�0�lg�6�S$��yFF�5�B��@��:&:V:_���1�z�)B�rK9k�tN���r�����7��]s��<�H���=���5Y�h�B7+���/�J���I��)X��8�1����������~<䓿l����e:�Aɜ{V���A���Bf1a+�j��gr�h(R�⟘�M'��e�rd?�n��h��3ƻ��Pl�$�ȰL�_���̛�L�����Bk�@g���noۚ��a��&ȟ���X��̴��\z��y��vm�՟�����j���s�޽�)J����A�g�H�f}T)�I0�*�b�r�԰��.��$���������7����Q{}h�A�����>��h�d���y�K��2���
ϸ;.i�+�5D���~nݔ
�+�5�h�B��l��G#�F�.N����\�/�[�$�m�1'ٔN!��0^��(Tҫ��E�N�S��6����� x࠭X�K�����$w�7�����9����86U�+�痧����~���v�~����L,�30���w��/�p$9�N��H�E4�M %�B1���+��ΐr��r�r�S����ǹ˯��x%�39h�۾:�z���G٠`�2�}iͫD������]{nB@�k���F�ۘ:x!�mL�}q	��s1�$r�_�����%2bh#��'�gee3�Z�~͘��zv��hY���$�H6�K΋��H#Ñg�Up��\�`��T�d�M�B���flG�����_?�{���������E��g��&����#�V�ɜO @M+#�,��:�8��yyy�
�ϐ5 Е��֨~�kX�v2ˌ����I��S�hm�"��udG��֜��qr���t��Ȯx���w>|��$p���q�wd�#iZL��b
�;�v9���N��;e�����QM�ЗyCѻ��őJ@G�$e�=��qs�]������u�Z���ė�����8NH.-"e�ߘN�,��� }l�j�}^g��&�%*��(��L�V���a�ʛ,��`�!ũ�ձ>�TQIVx�G�����Hs&�#�C���n�J��l���/�0��?|�,lO�h����%`���?O��9;S@1��۫h��b7m�^g���,��Ek�+vu���ٮ�eqL��j�6���v���A�>v���)I�&\�b0�z�؊���m�u`�M��p�����nTa�ь\�D!�q�E��uY{!ڭI*.Jߕh�p����a��2�͚����.�k�H-�|>���ӟ[��Y���H��Q�5�q+q�IK��/�;���&lh�c�p��2k�*��a�9V���d2.�����r���o��}��0�h}$�i��Z{��%�B��$��zg9�Ȗ��4�t=���N��z�v�r9�u�`�����)╺����^&ud��T��f�t�*�+�L��:���t؝LTt�=�X�&��q���r��G��#h7�����T �}�lg����qrh�y!�-�yMN
��L�f&�A��D�\G{���p���/y��;��$�$�m�Q���d��6Q��hj�d�V�yث	.u��mk�T%�t��C�~��$?m&��ZZ�&x����`ZvwZ�/��\�J	@ki�Kј���4��q,k�ҩ��&�@�V�BoH����PZA��2�2@]�H�|�+��>��>�ϟ����՜Ǒ���:�)�
�y�~߮����ӭ`�T���z��[_Ņhׯ��2:�;��Z�+9��	��=Hho,y�&��ŅH�	��4�S�x�5SD���>U��Y9��2����n1X�v�O�0 z�܀��Ex�:�M(�����]g���� 
�\ٔ>�"������D/�>�����%n��bP¹̜ �r�lA��Z�hk�D�	F��M:.�	�R�Q�I��_4�� ȅ�c�B�W��џ�j�.,�ic���a���{���?�:�9��!�ϸRr��[��q�1{`����-��p�}%�f�}�s�
2�LЭt*(�D�{'�R��B4�A�$����L[��ۗ���z�=><>ts�3s���'�
=d%ZNk��픫~�N�r=����!�#�g�wߝ�n�P�n=���s��L���~�\�Es����%]G<?�=���<L#t�c���VM�����}��	�����!02V�u�7�S��t9����g�̦���9���D+92.(˭lGa���H��q�P�[Q!FC�-�����;
�����l\
-E;y9�� a���m��*-g�F"�8�o���t-�������Kx��#��	(�졩%��;�p�Pc�Y@�\�t���u�|^�hk|2��è�Kr�l�s 7�~3��8YE�])��kC[:��̐˚���q|��t�_p����igf����˙����Ӥ���ݲ��;�KF++�J0���0�Bڭ7�s��9�	��H�捭Y�V�fc$c����m�D.y�scR�K&+��u��.D��_'��*����P��;�n����֟!�X_���@��;KQ�Z�_.D�A��KLpV��_���~�_n1sy���m�J�UQ��*��ѿ7� c�.e�ȑ��~���X�Y�L�6VD��	�������j��Y��h'�g�s%�N mCu�Qh�g�%�Ȓ撥A;�c���bH<w.8מ��n`�F�lj�[L6��.E׶,?5e��0���#E'�of!ڍ0})��|b�Ѡ�3�Nڢ-�d�}���!oZh�y��HٜqC���N$�8;�w	Y�2xO��)��!�A8'n3wX�nq�s�V�:/��C����1�+��{r����N�yWl+!������d;o]]h�u'E��8��Q��|��T�&�`4�$�Xt����F֓��퓽ə3y*�$�篘j��L��\�O����&�N[�`�"E�H�t�F�Ţ�,�t����1yI19T:��܀�ӥѢ
���][���HM�k:}����\�Օ$��[i�FO�U��fsr.>z�����d�`s�N�����-t����(��_zi�:I{=��T�J�W��+�^X%��I��+@ӡo�u<�9g,��[C;Ӹ����� ~ۆ�[砿���
�ͺp��=��v.�EZ9�I/��T��[��QS��: /I%���un?���Yh�n�pl������>��>U��H�\r����K �j\؃�N��^8e���p3ܖK�#w%*U' hI�4^���D�M������>i�l�J����9�d:�K�B�!�u�~?Ulա=�!$��c������t�!7M��l.�vz��)����ͺ̿#�򻯿�E#�z�>L�{��\�����{�"rpo�'��b;�<H.�$n�a��#�]�����~ �?DZ�C]M��_��N6�g8�`͞�7k���y�v
�NK2���G"l��&���!i͔��>? Q�qn�x�6��5\�J�\�)]I��o),������|I�D����R��@���׾B!�C��fL'g��;�    ���l���k���ն��������0Ʊ���E�u�&d��vB���R��C��ĈL�#�'�Ǔ}�0@1�F\�q����]wL�^�v��	�9�N�DL	�^���*O�DA�1��`����:�XA�Wm?�+XV�|�DU�N�b���ο�����6���Ȭ7a!����c ��4�^P/Q, v���
�l��$L�u9�Fh
�pVضmP�@�vgF�髅� �Ϟ��~hR�YN^��C���r�	������� �)���L�#oNx*�P4}�D����`��	�7���5'7��g5�p�C��α���"�nZoR������О\\�sbsܔ�%K�jIߔ�����V4i��h��y'q�@�������-i��=e��l6������[�tv5ڧg��N�� x���"&��w!�}��t��x��cΩ�D�s	�uQNv.2V\J��tC;�� ņI��-"���4���w�����{�d����>?�3CN}������|]�Z���~k����3Ia�ۚ.��;�T���+m��R��!f�����������U}}%�=��@X(:gR( ����dH]�"Rn'+����'�y�9�PBmhY�O�����B�`����Ij�5��]gJ��E0s��4kKg|Rt���}����3�� N���=!$��邽�������\ҧ�kml倅F/w�,�a+7ٵ��ڣk�&�2̡��ܦ��?�2x�]v��u&��� ��b��.ڴ kZM�W3��}���3�����w�=�WK֦�+�gh�:�0ڼ��ȩ���M$o���i&L�|�"s�v퐙�����'����3����B���dz��#Pd<����p�m�LBQ��Y]�E	�F0�;�(�Q^�f��_+@l�(^��o��%r���w�Ze/D�J��b���-���:���ƅ0zr�������)?x��T���S�k��z#�Z�-D��K�y�\�);zz9�.%xI(�1i ��*�͘�[��"
y|p`��{|:I|�Ƚθ(���L���7F;p�62��Urǅ���w{8�´�A�U��\d����U�2
u8%Ӫ"�at�u�Aӣ�m�%� ���ir���_.-s;����W��q��">%	Zz$RU/]�nX����]��31z�����EX� ��hAm8��d�T�t1t��ę�!e�~�3m��B�{�#���L�
�[ޓS	��6q���>���?�m���������"�v���/��
#���[�Y[�D�6=�"\�d��wM�`W(�r9rN�6y��|��w�ѝw~0��'�����/%�u�k.�v��)ȫ��	��=�]�<v��u$Q��ʸ�;rY"�Cd��`�3؇RG��������Zx��CS����ߪI�E���3h7Eɤ/�%��1ac`o2�=������5���7Fz����ѿF��/�%
|9|�!ڽ|FJ8g��vY��:t�F FV6*ҶAa�+���
���
�s ��o�d8��H-ҳ1��Ȃ$}�\g
�7�f����������Z!-D�������a7��k{����f�z�I�zw"|�޸�)P�I[�5�	��$Mo��!3��n{<��I-Aw�6�䑔Z:j'{Aq'�j,�\�k�@MZ�i�}Wq��M)��e/�i0���__�I�[Eg�Jș�8m����Я0��[�ӗy�v�pdP^���JYEx�%j��D��>r�ȭ5EK�9�%y��נA��6������/����q�5ޮ$��$X�&A�v [p0����(*�`锃��]�TL$��[��~~�i"��b��B�T�	��\G���1I���-�`2��̤�1qLUn(����� �!�j������ll�Yj����I���{�B���Lq�Շt��eZ_����_r�|��A+m\���t�0%#�PqM*{}��(�&���@�0۱D��K5\.�R�U�1>�2q�N��.�����S/���V�밂`�&҆7��������.V��;����9��=%j�V-K�ݓ�R|Ŝ�lF�i��ut�ar��Ò���(���h�u�����,��_HhR�LtC��D%J�B"��l�Q+��j+�씠�\�ـW�p ��3#���d*�c�_n�йt ;�j`�N�E��/nnVI�����=x���N)a�o&�{b"sǺ�"�K�ơ�Ő�P!i�!�n��I'IGo�~8p&���Qz��JM�/K�����98]���&XI�%3;z�9��(fYGA�T��%�U63�W1��Y��-ˇ�B�s}�{-%&O�gv%Z;�r
�5��>Ҽk�v8��>?�)j�:zF;�Ts-�=��HYff�R4`�U'I �"��C~gB�Xa`����g:2��F�:ɸ.:�Nsz��8���;�"�)me�5�ofr�c��Yf=*RM�{k�����O�`�9�8S=lŀл��[���jc�)<�B��T!`�!�Cj]:�Z�vcF�eE+~�_n/�%��_�����N�X:�2ܑ����#&�|#��Ö����b�J�~x���ƪ�Ӛ܂KI>�=j�cԊ`"�����Mj�ii��	��ܥ�����?��F4g�|?1}�Ҍ�����S\?�>~ϡۛ��*x����x��z���?Z
ݳv�l�?z~`9�[W $�L����q���3������~c���N��f����;�*��;R1g.��id?�hExx۝U�,���@_DPaw,T��
a�P�  `��ڲ6��Yd������a���<Q��#Ѵ�-<�Iu Ԍ��N�]Y�r���&G�k9A�6��R�wN+6GoE����N�y�$�g�������n�1MO�vZ��*wç�J�$�9���Wl�]iF��	�b���
z��]�]�͂��^��]�43`��%h��r�{�QD��R,��-��/hE���k��쨕H���cpDapB�ȡ��*�ܲ�dw(����3�H����+ȹ��|�n�����[P����ϣ�S��v �K)$pʀn�"wN�$�7@���ٞ*8���.*8[�+鹯��_T��h�R iTHp���ى�ᴽ1����v^Ը=�@���D'�XR7��Fv���Ĳ #��۶;�V� ��»�>��¦]8��T� gL�@3"jL�?�BcJ)��[�)R� Nń�[c��ZK�F�n��__j-ס�O�GuJў����e�EkMkG��n�=��9I���n�Sz�xz�?L��g��d�1t_t��E�W>�,��S�\@m�e���6��I��ԗ��3~���y�0���?��Q?]�Gm�5Cl�v/�f6F��E9�t-5���-��1"Ҡ�[�K�����|�B����CѮM>�S�T��d�s��HS`���t�IP3��m�d�q���I9�{�\��h��q2d�)���.���3�KH��Q�J0�P���]>�L�"��;`���lܔ�����~��=$��Px�]��8�9P��?�a7wzk�R(�u�Q3s���Y��B��*�fu��M$}yԤ�$�q:�8L�Z,��Ľc������ �?�蛯 �Nθ�wB�9e醈��Φ+9�b�N�@na���ʃ���
Z�|��0�0ȴ3L���2c9�'`�v�H�~��k���]ؘ8�̎�4wrc��O@���&��Hx؊�M���+�@�����R�)���c7���Lh�g�ݱ�N0��	Pۜ��:�^���Y����;�hȺ�/2a�F-+�#�V����̼�R�; 8���y�ͼ��b����x1o��X�X8�%�� �\�T��5MA�A�)�Nd�,���-m̮Lhɧ����-���KRY6h)Z;�^+�/`x�>�9yܬHRo䐻���Ʃlr�>[r)�!���p91����ݿ����P۷�yK��}D�/n?z�ͯ��?���g��L��d<�T{=N�����hwc�76`�G�ع�,�V����1    J�*���������5�Hq��E8�7.����yZ��?�:�SU�IɅ�ך!ڽ�tףC]!(�`z��?�>+��n�I�7iֹ�І���_����*�F0�8]U���I/Dt�;8;E�\XB����R($b�����+��e���6e�b9�W�ለ�YG��Մ�
��s"c�5y�,��š��w�jZ��b��i5�vV)�������-D{�	�rE�#���d�b�
�l[X�����c��|�o~��)�x�]���ɾ�͓����nFX�D�v�A�h4��rR'�~1J����O�UY�.�����tJ1
���ݸ%S��o��5!�� E���?l1���y�POC��~�M����V4���dW]��T�]��!�޷.F���Ŧ%Ӫ������������ebc�U��民-�L��Z����{����b%���\`�R4�w��u�ª#8)W��]Җ�� �at�)W��m��KK�����ҕ�����������3�~q�o�=��5��@_"�hvd.�v��N�����j��K���ah�(������t��`�ଭ�.D�][�Y�H���d.��]�ˬ�yUH��MAc���j�x����Ti�]�M���M��㾏ůj�sKo*�^Dύ�8��hWoJ�
��T�>t��?�0aC�SG���N2I~1�2�5!&�JU:}Mָc����$�'n���A;g}Ӫ`��G�|�-2=P�M���V/�m���}���>>\�������)�����j�=�t>���y|�9�}�o���y��.�����B�ץ�(|�oGH	ؼ�;�E�)�#�*M�@j2t��n�B���R��1���
��K��m�?k�3{%�7;}8��T}�Ӟg��4��ut��ף}V\hr&(V�sp�ϱ;�CI̊#*�5�_��F��u�����65N�eT����(�^Os/я��M
�����KE������[݁I3��pK�
��Ȃw�;^�e�h��+=9�r믆����P�Z~��9�U�\��:7�*���Z��m4-��(y4��`|��������s~��#>�ar}yF0"�g�����k�j%�mMn� ; (D���<h��(��9Iz�ic�EMvZ��p�j�pA�9k�y
�����hw�(�<��w]b��X�e3��vy}��e�4x�LghJ��)$j�����,A��e
���D����	�Rġ��_�vO�x!.E�<:%�L���m(�i�U�7��񯗹�Kn���z�=�i�˚^�������_���������Eؿ�y�_�\���/w����_��<���1r�R�N�/�B��c�:E���1��mHC�i"/��ӷ\��ؙ2+�������9�1����ǡr
C>�i񦇽<S��
���TMr`.��Ᲊ������p�x�	R�'.�@���FJʎLU�q�O�P�D��߿���p�W��m~$�z,��kՎ�b4]���X��5}�t��V�
Y�;-�2�X�y���� ���։/����L6)l��%��0��"��p>X#�h���h��9�� o� Q׆�"EH�Bqԙ���1d�����m�,y�G�����w��&�OW�`��q X������(nY�\gd�(Eњ�f�:M�5Jm���\`ܼlA�Ϋjt(��l⬅h����#0�0ސy�6'��N�C�l��̑w�WQПg)���i���3Wㇹ�AO�3rI��C��L�t���k��\�übZ>%�g��a�)H�3�AQ��:n�Kvsa��%�����KA�.x�Jr�==���ecOاqI<~2�Ėi�h�sJ��.�E�i�������?�����y����;��ވ#Ѯ&�%�DF8�@�q&��%
#��x��Qr��@^�M(h:0 F �¥X7^M F�5����|άZq�%r�^�z!ª�֪����֣Z������K��S���$�(�$���14C:��2���o9���=�?����n�'6�]+j�PBHvw���Hi�dșHdR��d���^�%�W�(9��X�wjd��sV���-b��4�J_�_V~��(�;�/3(+�������黨0<:e��k��Q$hz)�s^I4V��Pؤ��G��]��ӹ��9�P��l9�iА�ퟟޮr��z;:�~?R<�C	���A����`=a'����<�D��h2�YJ�y�m,��-NW;���[��_���؊��y�{iDc�]g,E�$#c�;�,�4w��6Q4���Y\P,�G4ؼ�d���3��Z�TS��)?�����]�䘁�\;����H��><��B߿��>S_2�^v,�O�U�,E8@T,S'��*����Ѝf[/݈��7wKo�#9(ˇ1�:�y�W�� �:`�\����4�ǖc�
Ծo�乨���,�1�;:��o?V�7�ռ�e����3?L��NI�]�l�n�	̗b��'!���^.����z�6� (���DO�?a�b;��҈�J��G��@
`�$Q��*ƀ��5c=��Ǭ����U���W���>��o��7��n[�����c�u�XɏE�{�q�Bj�R� �ڴm k��փ�>Y64�\E���P?~<��V}J�����n梽`,0�'?K�J�U^H������y�"�hf�q�Ku�U�H�f#)���?�0d!H�ˈ�O��;�՝��F&�p4��<���n�eEG�r�r`.���&��"��y}g�E������W"�Y23q���}�>�����Y+ mt ڍ�R_}�X9�׈�nR>�t
�-I�e���?�Ad+�=-��M�o.�-6D	Z� ����%S��xH!t�,1�7A
���#Z�ΠF��c�,?���?RL��n����y�Ѹ �N� ���D��QE*���{ZVЩS.xO
��Ct�vB�~�[�K�12/�Sp�����1oݹЗ��;[,���] e�;��iZ-��C�u`@��L�$�O����Bs������LՌ�R�^�&6Mk�h����>�{��U:(�[���߰��,OB <3tQ�D�i�Y�\E�H��{�+r�*����<�T����[dOa��o�-�o���o����?�����ǯ���}���y�?����돏����N61�_�s����K��x�ȥ�',��2��;�z��e]��KaS�s��Ӗ�K�x�i�#ϡ�kl���wtE7_� <ǴWg��&}��ɀe \&!�/�Kr�(xT��ŰF�(κ�u'�G97d?�1���YR2,�uё��� ��=�R��}:6BYq�07���������_�ls�DSV
I��ߧd 턽�����v�,���Ɏ�;��g��Q����!��"J[>&�OO`̍�ly�<���Z���s!�7"��F�U�+����E('��:{�cd�3�2;�m���:	�>�G�![o�R.\��4ϮDk��ǌ�57;�A��+Le�5w�k��G3ɮ3Y 0�Ӄ��ΎT�E	��ܞ ��ٶ����.�3w�Tmx[��v�b1:��X�B.�:�e�:k�Ѣ Gjtw3�ާ0��{dW2_`?D��ć��	B��TjwWϬ3�M��蠷x}}�X�ۮ+�~8��)64����J���bjs���iK
������>힎�
�X�d��/8ˁ�.*FV�{~dw</��>�/(Sh'�����6�Ǩ.�9o���&���p�±3�R��J�Zl�W]��ژ��h�I�E��:�b�ddF������o 2�Y��B�x�h&z��sk]uЫ �x�k��p,���1Mm:��?Հ�ҭ��S7��E��H�ɶ6GH	�f'QYńW��LH��δu�;���~�n�L�����k�>P_�?����&����a0 ��"z��7И�R�������=F��_1a�t���yr��\ҷJ�~�e�l��;�{qe���i=wK+��@	��}�H/9:��d�$�fc'x�9����\9
���Nr    �a �s 	����;��a��.���~x������G�3`�Qj���U;����J��V	7�J�͟�/͘���l�"ݗ�+UHxz�H?2ܸ���J������t���,�?��?��y8����޿y|��0����'����΁:�@��!�bj`�����
+���Z�9�W��W~=�y�2���'�'cC�\E;�T�*M�0$�-]C���N٪�D2m�����4��U�e�y�m&�Ӷ�^��%�$8\�Bg�s紈�W`��)�����kpR~��ٷt'i�d>��~��y�C ��)�]�t!Z�(9������gu*�a坲z=��5_<� (T��1�$�H��E�O�lLn}2����\�<�ΚW����ޒ�&�sm�}��� �r@}�@Vn��a^�e���,���-HL�D뢁�f��zW~8ׯ��y"�kt�B�o��M�RHL����ng8���z_������L�������IP3�6N�P1�u��E͇N�g7������2Ӈ���χ~�V���4���[�԰��En�%���>�N
���4E��q2u:xf���/��B>c-��#<x]�C/YI������p���!�;i��0�@g-��}�V�T����3�_H�rET�7���nz����y�
�+L
��?�o��������@��s#��!��1]���Cgn�@l|��i�x
wJ�~K�\E �V�$�q���C�+u0*Fŋ��B�FU��sP��^�q��+9�B
~x��0R������JY
b����/u�g<�A�1�{����Ă�E�tN�$�9����	E��㏵�|����y�/��˛���[���~��|�򯯗��x�R��^����e��ԔсI�y`�s��CWk�"*�BDZ}}�i_?�{���I�	
��� N9�G��̽�Vo��+���Sr��{������G�g$@�߅�;��T̻v���lCC�#�-+K�z��I�˱��T�l���f5�)
{F�.��XX�lL'ѷ��av��LO�l�&oC9|�
��
�m\�C��p�i��L�?��x�ѿR-$�Hj���c2��Cb %[���g��{ �`�5��ł3hj1��Ϩ����R����ͱ�O�"�u��~[��V��L������"�:�������U�Ҋ#8ׇ���MG[o�j��j��\��ךlּ���HnH�yI���N��B2�=]�B�u]B+�!�a�ua�#TO�?���~����ű����{��T�Z��!�^���V���jR���0Pp�iKTZ�4���%G�V���n-¢ĵS��ws���n
>���t3�E�ČK���h�Qf��� N}Amp�NX�|�\�nJ�c��'0��mZI÷QG"��a[��\�.;%;Oj�I<[�w�����1;��O��n���t����1+�D�&BZ��y�<w �v+��G�_�<d��IяQ�Iti+�\�1�9���M45�χ�>֡×��ʢG��?������@V�3��� i&���{?޿Z��C�@h�˵B[�v[cɉ�(�3�e�BU�v2�9j�s�oGz��co���������6z���=���Q
�#	!�?��Nk����ҍ��?�n~G~;��?��ǷF�<N�{:?�&0c]��
�~��?]���h� W�x�؛�Q}7��^�s�[��MuD~�տ;�^˩��Yv�-���{z�&>T*�%R ��3R���x�a,}�{$rt"�N���Zv̀1p�(��TYsS�go��=��������Ǉ����"4F<Q_��GQ,Ҕ���-�.��7�	�� ��~�V�6��&�|A�A�-��y��n��y8�"7��j7M�BD^�v�Q8�pK*�&����~IQjfȟޚc��E�]ܳU;|��*`*�K��b!u*��\�Ag��h-���,����R:2�IOW��E
�̼P�����gd��#���!��Lf)���ڛ@�u����y�z8�DEn��C�_X]��2G&���@���LTt�q���D�%���6���V��.��:�� QO��.�o1�i�W�#u3 K]�y֬�Ϸ_=!��������ӣ=���(�lf�梽�)�8��=zӍӦc���U�{�l��kv,�� T��SF��M�άg��]�)���qԢ#K�zpe�A�-*H;f8?m����η,����e��vl�7�ZQEr6��\�yt�i�����a���Mz�2y�	��]WN^$j5<!�-)c�x��O�cS��95hc��ʯ�����0�]^4�o.�]F%n �qt$��L�U���\�a��s;�7�O����~���X��?��7���j+5�J���G"^Q&�@�������{D��5�x��c��<�쀅�N��oR�3��X�W�,Z	�u.�}#�R����J1��w3�p��W�K6�o���ס����=��U�+��p�]�p�w.)C#1G{�L�ˤ���却]R�i/��i�X�	E�d[z9��tڛ�o�6����Ϝ��BJ��va�}8b�lxb��XzZ!����f��|� �]ʈ�L���WC�m����~��ᴶ�i����k`)�v�|~�K�K��l��%�@k���q��?�.h����.D��?���)�X�����K��>�Ή���aحz��gـ�Iw4�;"��#��[�1�c�h�tEJJ��64IM�� ډ[�m)oH���?�G�;x�p�Ӑb;y����YoVp:+N���˵aN�O|4�R
�W<5=A_*v�^���P~�\��X��q�Bv�.�*C�k˕h��� '�R�nE�2P&��pEܸE�)��%�-�Qg�#��1sѮ�p�����3΃0��JfZ�T�r�K�"3A�ps3�n��3EW����'Ă�V����o f��ᙃ�hu�L�~���h��;�(�Eբ�E�N �3c������� ��p�hɚ0r51k��p=q�6��=³N�K�*e�1E�fub#�\�ޅ��˒���rP�gT�����^�]ߝ�hw9s13��B���Fw*yox���8���ȩ�;89�%��l!���.����Q=��Ud|<��e-�A�z׼��dri[��@�/��E��P�\���>S���J[3�GBA����ɟ]�s�����R��U��Q(�t���{�֑��xA����P�����ڗ����m�;.�"��p�z(�4R��4�x.�]�� -+�`�4�� ˛�}8꾱Y���!&�����&��uSTм�9���!������+>Օ:�>ыٜ�%��1p�çT���s���됗�ɉ�Og ��KP��k'�ʶ�D��$��U&E��d���Z�H;�Q�Zҩe'�N~%����ثI�P;��Z�t3żѥ�|3�*��/v�(�+t�	`,ZU����@}So��]H��Z@}�����9)*U�i���:�]�vM}t�qRf��.�(�f	�8Z	�����Ry�B����etp��02j�m|5�	�n�{��ɓJ�����@��	\���w�^�h��\D��z� �y#ms��|x����{2Q��,��S���j|se.�7_��U�f~�&��¼:�g�գ3C�ݦ9ݹh�NӁf��<���{�R��'E]ԑ��A���S$GV�k�A���\�U�f�4�׾vٯ*g��D��K���nܿ,9k��{r'�J}�"� ��h������Y��J�F���cB��[�5�v�Q��|Ӈ�$��Xy=B]�"Ѯ�3t���]	V��J��y]�ore���ň�tg�Aw�Mr��D�I�x�8]��oԁ�n��Wd:zJґ��}8�Y �L�Iբ�#��dR�K���1��}u�F����+|�9��f��v\�#Ѿm��d�Z��p�ȝ��MN�V�%�p�|�#]��"&�\��bU��վ���V����2�J�~@���':^m�=w��9�ކ�`6=f2��S\r�)�*�RG¤���m)ͺ��    w���S����E�s���̞2�������뽫�F
�*����"xr�d�	8Q����_�)�x��Rn-S��4�_m�b���_�vo`a�3�1z�䢐g�?���V����[���6��4������p�)g�*G��.&zEY�XQd�E"׫�I��~���NI	R�.��j'�� �S�9}$Z�7�k�'�q���͢��[=�Tp���[۸Ds��S�:H�`4u&���12I��!�6�]кm�(�]
��6����z�S/'�ߞ��7�L�[&흲R�|�����1�JR�|?�+���!U�c��k��h�<R�0��闠t�r(dU�`Zۚ�+R����W����'�x{������ǫ륖r�������Y��L������E�6��F+�H��c�0��o�ސK�a����ϕ8-fg��Y���h�>�2����t��m;�92ك1<P�:�nҲ��k����9���E>�Q�1�G�⍙��x� ��~�+��*�^���X2-.��u�5N���pj��0�wg��D��cN���n��H!�Ӧ�.�+vtD�S^y�%f߼'�_�*�V��o���퓘��_���-@�gґ�nY��&.�Q>�g�-�p�e�-�s�X��fn���5)ǧ�9Q��k�0g�|x�R'(�'\�R�?���N)�ń�"��4��;x�yD�T;#W����^�67�-'#mm4��h�� ���c5~٨���F���x@w�?�5쑣�׭�u.�7�)��V���!*r�%2�`�!�D1k�����,�b����	�3pО�`�`&e�:�X��{"6]�#EE��N�ˑ3��D�|�vڱ=�#y[i��r�����_�Y���K�4�lm�",g��m��ɧ��4���x5�N�J���U��mW�krǻ8 �IuE�*A
�ɉUG��D��w��D*&Ť�r�m���h�;<��ߐ'_N��vw|���	�#����o�k/���n�������7�����E��V*FgkG݁��7=â�d.}�ȳ2S|�S�ˍޖ�W��o��ÌƩ��J^k���KI��c0�$lC|�����`�4бȽb(�qV�io�OrLN)z}��� �t���as����h��h��4���>�P��Y68o����9�C@s�e��L�c�]&7�6��]��ֳiO̪l1�o�o? $�Aj����v,
l�s��~(͔��r��{�)8�*K���+
�PU�Ly!o(ձȴ�\ZΏ��-'@m:д{�;n�( ����<�q��N#�<$��ɓ�GH��Q�5GΒ4ɰsbJ�R�7�
 i�d=�P�n��
N�`Q=�<��P��D��~Q	fN�V�� ���/�V��js�Ft�ݗ��qz���I(����<�Q���a�n�~|��%�_���ࣨ��f�Z�sɮ��2N[/E��R�Q,t�z��|�{�O-�R�J*�2n5��Յ>����Ȗ���+����6%	ʰB��V��2�J�D!��5�{Ǧ�.���� �����>e��}2�t!�)E[S3_�pY�����s�r"���v{��^}�WB�;R ���!�cz��Ё��%=mB4teHMK%���ӱ�ET��p]ȵ��ա��y����B�#�o7a�+.�P/���%�vQh]m�cSm��iL����~�J��׷�{�q��wN�N�-�BDG`���@��CYjE
ړ� #�p�#�)���ZpZ�!P1���y�)2�w�$U��JH[^���M�y*�wB�V"K�\���7S�n����?#�R��_A�(WZ�unj!�W��WL�4׼��;�V�W�~[C��I�����ؖ��8s>�N���=����z���&Rv��Cn�<�ˌ���6P0�-�1�u$���N��[��էhU��N��{�A��?�_YM�M�����rmXN�����O\gE���w�t�9��5�s��Я�\�ߕt �t��EW�LJ�O4w.�e#�Z�()xo�dǦ�^я�k5aѮY94hi����s݆�ᩢ�� ��_���KΚw��R�-���F�8�.P I�$9��D�Mߋ�c0��y?��_��Z7��P7�z!��;㭚B4��4n����o�Cɂ����O�v=�H>�":N�ٳܑ�;�S�@��2O_`9�gۛ�������|ݧk��V����(:���J4�l��ir�b�����D��<�:}�i�R �Ǥ`z�="|R���&�L���K�0)�N��x��ݸ�vZ_����=X�?|��7�Ʌ�M�@� 4�Y��V"��n:�V�5z�1�H!h��|%�'K������y{zm�Zs!jn�d�_dM��Z����N��R��"V�i�/_)&��%�p�CB�>�_0
/�����ױ�/�L�~����lrӆX,���:(����5�p�?��s�Ř��ܥ �$89��{yX�с�:���Q��:J"�g�K��r�����.ro:��w>2�τ�&1ٶ�81a*�b���k����%sѮ�g(��W3r�S��,KR��(C[�tb"G<��|��a���G�%s�^��voNR1xՒAb���!��M
�(�4mcnb����Ew�^R6�|����N����e)�N\���k��aY�Pl2��#
��� �y�Y��R����&�,��]�?l,jcM����k�F��_:�.*�b�M2nt��h9��>�Y����7�J >�7W��mlù�:� ���՛uqt!���%k�$Ɛ}�s�����Z����SN���K��o��Y���K���]0Rx�0����jS����������φ�����@��(�b�>�_����Hu���ˇ��J�|1��h�&�v��1�،�hף`�� <ت;oH$�.겖l����Q���y����b�W��]T�k�/���� ztM���S�BW��@?FN5Y0tjim�Y�C��L�~��.(I&J0��V��&��(�j�B>�"���G𫷏� rbЮ����;h�#b��v����KE�U�t�Ea��.bҎ��%h�e%��B6=ǤX���+G7#���e�JN����R炯Y��z�ё�V4�ۺ��9���G�M��ZGQ�v#��Z�?'���߂��z���J;��Z���h:������)x��[���G�h���7�?EM��`��x���_�8���OK���C��͞�E�W?)K���Z������e�����pbJ�Ы�
�KO/mDZK�݄t���\��evg�U���J��C�����T�AeыE^ =K��9�Ӱ���كO7���bV�yL�Q��P���ˉ�L>9%�89����X.�X�w�6Q�J�{o�1Ғ�цIZ�~�Q	���\(�b�:5-��K��<G�_zY�>G���T��yrG"�!ؖ=�λ�Ed���<����,fעq��0�J�Y[�������/A�9�_�$�Y�#�E�k�مh�Siԛ������\Ȏ.rP��6��&=]S��	LA���� �-�/V�&��s�?��bz?�>ߢi�BsA��ۧ3^�JrF��'|a���H��6�?�4���`A�
�@^��(����L�O{�/��x�]G�����NNN��k4����Y�� h`h��\���k��1�(ܢ0K֒�X	���������?<���RQ%�6�D�
�$�#���{��8��g,�&�[��hV���5�Q'zw�\YP����9S�J�>��"Ǔ6'x� O��TD
ܵD�NN�^�,�ŉ�-VðxS/?=��	AS�9�d3�X�ʾq4f��+!�#����ə�����l�E���!)�,�̶�����3f�J�6�퉩��1r� 6�>�?�GR�(����Vm��`K��8����Sta��Yu�'g9�'��P��f�UJe`�j�Vh?
P�2{�톊�	RX�@��;�����^ic����\1��O�|�Lb/�G��2��K�)�R�#ְ�*:�����L�Bs����pFMo˨��L���    L#(�A��g����oNb&�7��3GƄl͈L���=J�<�!U�G{s^�F��=#W ��l�S�f�%�v�z�v#�)�Z]N��3B3�>̅��o;%�P�����f;'�꼡)����0ޒC!���w��p���x�ﳽ�S�?�>�;�Il9������D�]lR,�#�>Q"%������O ~z;����oGX����@�F,��O��d9u���z������%�hrǨv��L�s��/Gm�EF�
�!�л�����
�.M���%���\�Y����no����G24_=��?����'�q� J��[5ЯE�[�,<1�țo?g��a�[���Ͼ���_ߎL0��~t�B�;f�0��Ӟ$�d�I�t��':'Rg���e]�F�h2�����/]��Xx4���J)��}�M)l��1�m8c��4J ��B�ܑh���c�d�ݒ��6=�C�?�'��ob�����🝈t%F������?�I�\�w4fj��`~�X�Մ}v��_N��:'z���.�Xע�{Q��&�%
�:�m��.�y!mq�+�GWN�|7v�̶s�ϟo�����%�nӇ����Qß����NQ��	g-Zm��T܌L�o�޸g�ԨR�P�q*�X�Ѳ�}���I�l��U�z4$��g5�t�b�H������C�4  ��І��qe#�v��+���"����w���c��������?ݗ��j}
��)ﲚmiY�U�} �ϷeO��ڈ� �\�I�}K�=h��RqL��� ֫l�5��!G���upŕ�g�8���*<֬Y���W8�s��?���W�
��o�����:�_
��Hm�jd~-�m��/�\AOO~�ms�^����?}u��_9��rNq-Z}�t3����7_�p��CW�e*���d�^�m��m}���вWN�pCo�t�nln��&wV�OJxJ�a�I�D�����xw��19.L�	�%����xѷ����� ���ݛ��Þ��HI�-���1�M.�n���G�ҋ���#��pb���7?=у�/_��C�f��*��|_�8] ���*�ՁT���w"ٗ�$�B�F��(��Շ��[��]���V�-	���}Jo+<���`e��Y�����ܮ׷�4PD�.I�֗P�g�4j
��e����%�q��q�� �F���ǧ������?�� �}g�$�Kc��ْ��b��u�3:Dƌ*��7���9�S��d,����w������3��R�!�dW�y�����ʴ�ظ�J#���灈���\���G��?�����+��Zp�O���� �RM���G����x�f���� '�v!ӏ2�r�H6�,C�� �[�{j����U'|q!I�1g?f���+�?�7Z�#��
S>ځ&�	щ�;%�f��'-o�}��؝ ;g��1}7.���L�A�A�m�w�Y���-�υ�^z��I��%�e=���W��ϓ_��^)͹Tk���.�a�\:F��YM�xJ���sn_�����V���v�4m���ŗ���T�/|!�]�<s T�7y�:�L_�t�\L�e�r6�`���^o<�����:K-w��hi�U%C��)1K�:�3��E:����u����-�Qf{�~�ك�@�}R��#�{;[ˁ��M��,�1v:R��`��A�a��/�p�HG���#��Y^~2I�
�I'���]Tt�E)�t�`�mS�H��ͬ�B��¼X5*�����{���V�� >?�N3�IEZ���\�v�&6f��/m'�@.a�Ru������v#O��8�
�ugDph7�Q���J�t\�&I�)i�S!M�A�����o%��&
M�8ƼY4
_ȹeN.�������3x�JE���r�[b&k�0��u���_�������\��Z�?�E�W�8[������߷������a-j��:�}2��Ml"j���_�R��V`�T/�%��Z��s�
���?��0���b�D��M-5�X��j@���]�\�j9d�����s�V!>�&$����c Y�m��Nu�rN�UG�~��4�얉���Q��g3�"�����n�E��y.�[B�i�r� '�H{ �o�$�� eR!��+h�%`$!Ŕ�sy#�:A���2�I/ 5��eB_6c�+�t]Ʈ�}}��	«�.%X-ߢ�t.�DVڑKI�p���D� g���1B�1��٤�NUk:����ʲ$<Ł�za�|\���7[,�P}Z�e�,�� �#�vܐ�|���K6�t9�Q�)�+ ���g� �.�M�?���츤��w������s|�ߝzi��$�)��jjK?5*���՗���:[���+�`KuΝ�|��0R�h-^{{��Bv�7#�!m!���k�����|�����x[N��'��\�d��Zs-DX�v%�<�m���������R8�M�t4�ǋ� �r���`m:A�,MJ�m����T
��8�5�l�[b�a�^�suz)�>�4$Xq��١۳E���_O�a�N]ajک����+�N���Y9/G���A����{��H�+K��0=v�1 �����ԅgD��T�l�Ƭͯ,�P@5���4�1�w���H^Zݦ&����p�}�k�Y������fIR��N��E:]|�ŜY���\fZ?����Bkf_�����6`Hag�Bا�׭��:�������c��Hq��������%X��l��!��9K���h��7e�p�9��H��������~�;{�:���5'��	���3���%sm��c'"�MK���]��Hr������@	��$X:�W�M�K.�0�D
l2�1��ە����m���-�it��O�?�u��:�#���dp?fc�W$?�G�@8B�Ys���r�� ��8�"Z�Dd�'��\�~B􂑙�B�}�P�}�s88I�D����M�Z�,��6r�[����[]�3����%��쪴2�'�[��}5V��Z��i�V�|��+6���xt;�Zz5�g�/��>�)g��v�����h�Ah�����W[��f6��Nv�金*� ��1&WȆ3��m�j��+!*�Ё���wE\�޸����Vsr~�3����z����Lv��h�Ku�&��&��r�X�7�v������ߧ��<���	�u�8�(�rۆ�J�f��E�ם�tet1�L�}�B'�h�ۘ�ׄ�J�ǰw�z��蒥�	��:b���8����K��伂�����P�M#���>DXoKv&1��6b���Zs�u�:ux~��;�׿sC�>ok|x��~|�Ͽ�}���S����u��;h�kϿpG�E4�ܽ3ѥ�k:�3'�!�"��H��Z*��ޛ�-��4�N�X:��@�J�!����S��ݛ� �N������8��>~{��&���Cd�t/V{0-�o�bĲ����Nv��W���y|1�F�1g34�x6�ؑ��������&����5�|Q���5x�[��J88ڈO���*�2!�����d�s'LX}ϙ��cg�#���!"�҇eB�L$����z~�C���wO���>|zh>q|��U��$1T�����'�v�<a������Fx�}L����V��?��y�aޓ�ɡy�緣��nOtx�qG��B{�1s^g��3��팇�6�(2ѯ�j."'�Ʈ��H*X�wlp'�	]��(h+b�w�T�����s�:֘"�X�:C_�Tb��g��"�!��n�i�
ѽ0]R>	%}s�c�Tˈ�=���Rf_`��({�-�ˈ��w�ȷR:��aTJ&������:`���z��kJ�ATDn�:JN~v��˰%�ke`ꔥd,x��ܟp@/�Օ�eu�����.�������m$�s8�=n�ZS�l�@��N�x�f���n�폫����O���+����3P��i�����w�s<#�DT1������,o���.�	�z�E�:�s    �C˭.7,����7�n�� *�HZ�ۆk����v�X߅�S��.�;j� 	tj�D����Iw�/�3��^)��d�*��;�p.5A�kk6�Z�G���b���:�c��R����gq��0�lq9=AC�&��W�}iiv囹p)	���ei:aZ"1���e]k���������BT�UD���J�uuثe[�~ʮ8��*=+":����F���%ݎ�4?SqV�L����:�C��$	m�4�G<8ie�������M8����ok\��R�$c-e����;�U�N�&�B���'Pf�:r\A_�>�������^[%_	DE9�������O�D�����*��ǡv�W�r.���Q�V��a���CP�k�b����6Ћ'��S[�i�����k�/rA�?�͓�c���J�y?���yz�X��T��b�@ᱶ{"jE��%���'�C$GL�����6��7�)�2�b�]`�O�P�	�>�{7��2Dh�'�%#�.x�;��u)cp�����<�q��{�3�3���k|ߛ=�?-�d:p]m�8�P5�T箅bV�{/��N?�3s���L�-{��zs�E��$gS�*��I�ԉ
k�$�L�E-
vޥ�j3Pi����:�\��rU��e���&�>�\=BoLufI�% ��aBGHx�垈��Iܢ�#"�2ˑT&(z�Yk�Kx�=T��$���38#!�4�ѯyzq���8��)Mt�0�:�sхp��,�0�W���$�aSs�Һ�؋i��_-ϑ�Z�;�˽�{"��M�qz�-�)vw��sdĞc2\� �"tv���y�l*��k��^{��sg��C��K�2�*��LXG�6r �8tND\��K��[��	~��H��KB>y�%����v����s�k��`]�d���mv��X؆��&v9��9�[��;Ԑ����t��r�;8r���r�����h��yՁ4����-D\�&^�q���F8#������2�bMX��ʦ����������Pg�$!4��6���:��S�bu�梋�TQ��Xt�]��,�t+OC��lQ���Z��%��P:�ͭA�����*��rju��H�WfK �7�V�1]�Z�a�jD��@�n~.�g�..�rj�5�擟����*�Ī�o�=W���IG��i'8<k	��>U�bW�@�tp����y��9-�8�~�#��o�d��I`!���y�<*��&���NY������33���m}}���0t4�^��lk=��C��-�~��T�N0�]r�8ڵ~5Q�Ɏ�9��rR�l�ޚ�E{�U�FK$�!2�xY#x����_�='I�T��>!J��T�2��5�gk/�|8#Hf-;���d8���n����"�u8zX0M�P��	��{�&4e
BCza+��u�k��nM����K�$���ٰ#��hϬ��ș�н��Ci�y{5O����!�S�//����_�.O"zs�롶��)���'�l��y���碋���x�]�j��N����^Uz1��%���S�M�-�|ĭ�~#z���oN�;���e��Vd��
�ҽK�e"�[p�NsN����̱��</�;�{��8|���1B�>��'�@��!�l�V�ƫ�n;�Wv�Ov��|�>�����m���W���*w�9V�ց�!�����_iu8����g�����: �8X<boJk�4s����;�U�!�q	�A�6S=��V��C_�^ц���#nh7�Mp���8�r�'[	O�Ir2�v�tL
�s� ��nV�o)�piXs�]1*����}mr�	��
��s&/�'�_��f����x�Q��&EX���m#N�s�N���F��!n�
{��ʶ���
/n�������\�Jh?h/��E;�h͟��ze�/:�b}}%/��sp(���8�L�����1�����O�i�Y����c��Oo�ݗRǤ��vg9�㣏��W��j���aWt1�d>���5w1��L^dVhE�s�*&��e��8FI�]
�hj�짓�&�w�-'x��j>#,#�1���3�n`7!Z��M��.k��kp0�:t.B;фgkm�u B0�d��]ղY�ɓ�g h���&"����;�� �Gt�w?��Q1�
�?�tq�aU��ִg��MN�-��jy�2@9[�w);�1ZfX`�B<mTW�� �y�v9��B!h������@�q2�/������Ε�}(7�BT`f��g��ﾪ��v�KA �л���,��{�>۠\��k���=�"^�،���֙�ceC���-���Xia��쵆-c�v� � �|�'��9ŽJ$�=�O�i�g��v]���,��7Ei�7��6�a4ɑ�j��ԔR���H3\N~��Hܭ���6YY��Q����"��a������}�_�������*�?�k�S�"��^�����Z�Y���q�gnݶX�,&���z���{���g��@V'�-2��g",a�������aÂl�t�_"��_5����a���C�aģYuk-D�bb��i�������oW�_�S�p,M=�����_�!�d�ە�!^T�N�fß������>������4	s��q��c>��LB���z��l��/gC[�p�-�g� �y���U����4�OS���3w��9��c7�����w��7ؐ�-�z �B4��s&��j���p�s��X��@O��RV�|
,#��"��e���j	!K�;q�.�$�+��Ɲ.&��ԞJΓ9��]ZB�&�@zo��]|��J%,D������U���d/�R�-���8�p�Є.���Ǩ�f���1%��xK������W�T=0;��e�q&�N�[:U+� xb�lF�!�j`�`�Tkk�^M�Xcf�/l���<��������WmbLy�m��&r���U��3Hq�ߑ��QoM~�ʻj��Uۋ����D�gғc�����.�P#�N�ULr&:^��L&e�A[��S[�m�2����Xē�o���It�F�R��P���;��!��kGȄ]�Z�8�mlK��,�P5r#7���'nɿ~ɽ'�W�Ǘ4N��|�?�=����D�`"E.-�{�5�b��D�5<I�Ƒ, ���H�^{��Jđ�"�Q�A�G۩��l�
�j쵞6�'��o�]��a��_���ǳ{�ر9�pt�Y��ff��i\�k7�+�6,[?�DC}�xEE���ޕb���[UV��U�n�'�j��,�E��=e��g^��{}&ZꃩZ��l�n�&�ܟ���Đ��㻧�q��T���;!�3|���SL����S�\F�C�*E�{ZC�������K#�٭�T�.Jp��]O�e��¢\��qAz\�~�C�D�6I�dɶ�4�qD��aIԯ,wsd��#���������"{�����dl���O�FU����G��<@XλM_O�-p5�}<�?��oo��{������~`�F�Z~�D��PD;�I�K��)�QB�v�(w��?��de���x��b�p�Z���|��vkE�@.	��
L�D\�iV�7���\�h�Ҧs��n����h?���=�_K.�y���uM��P!��$�M���U�m���Ot u-���#�ǉ�c���Kn�j�ӣ��E4����l��ꃨ�%���`��%'sX���Ĝb�6ý8_c!��g���G���^U��䈺��l��D��NUz/	��ČH�#Tu���&��ia#�b��	�uVg;�~�Z�*���l���=���ɚl�E� Co&K��7O��Y���̍>ە^�:Θ?��L�gg���������?�˪Cf���C�!<e��y���$�{<\�k�6ɩ�R^�z.�x�K��Ne1���n��Nou�86�T?@���^>~������b����➈k��"c�:�e�\��4n���i��1�ɛ�}�o�e m�Om=�%�K0�4�"�m4㕭4g1�S��]��m5�:��қ�F]����3�}�ދE_�    Bt��M���I��,�D�I�uNe"[���m�n7����~W�%lbw(r�2/Wa݊�84�M�*�N��Ci{"2��t]�'�DzR=,J�'����l����Y�o�%���>���y�%U8.�����Tm���d �����|�rl�fWΝ��+����}v�#>�՚�\Djg���!�N�l5��府xv�����07����t�f����'��i!w�[��MX��Rv/Ū�VupN�}m,��|KZΩ�6� *���!p6D�V�̈́��ҭ
=xm:��=3��i7��*Ê����қ3P�ٱ��u,'�6�+�V�5���l�d_��eC(�����W_u��w$��� a5������'�Ety�q�����#�����&k)�A����r��;`�L���V�}���*�;z��[s	_�f�t�PK]�m�� Y.�]��Q�J�\��L�u��-��m���9��r-g".f�ԋ���n�آ�3��+|#1��Jec)���3�	�T���f����-��)�5�6t^7��0�.��{Y���\�`a���ZR[�����:T�b윩��~ -���VK�c���4�n;?�v�3[��-�j{R%X��3��"����w�3��Ղ}P���D'v9�8��$ɽl���G�r3�o�:&�m�n�y��B����+�汗wFq���-;������/�H9+� p�R���v�B$|h���s�.t���E�M�+�$���T�ʭ������/������v�x/���BtqAѴ���Rf��m�<�ʥ��RkGߜ�Q�1�|kO���48ɭN��[��[��"��އe s&�7g����#\�ٹ]���b�AWU�һ��JJ�Uh��|��IdXi��CJ�:"]��%���	�4����ld`��i�K�]B�ũC�`�}���e'Tn�8�w)��^Ʉ�:fH�����3�\�z����:7CD�[�w6�a���] ����Rޙ�b���k�f\���u��D�:�$��:��<�����6��|���	�2o��b_^�޿Lpi?�"�B�q���=/�ۺ�.TI�`���a�:�ĺ���hUY�~��,��V���)�*�7�rs�_�B׹�b����2Ŷ�&Bgbj���F�nw�E'g�
�6Ǫ�M9K"\k�"W��#~.(��-!�)��ƎL���M�-|��.&�"�	*i%�m�������0��|�����*i;q�c���O����s����Tv�A2�f�^�=.��A�6��Y��UY�v>�-��im_�����;��\�7��`Z	e����=�E���7�yѺ@n]c	��beV�6��c�1՗���O�c>F�?ݍ�r&"������j�#5U�]�w���hI.��n�~�aě�g�$4�s����/�pV���G��?�wW�r�}��9��9-D�m�q`�9śkN����bk{aC��'B�T��`[G�X_x>v�`���R�f�w �@"#O+y/�"��
�y��SS$�BZ8.BD��{�ҮIJ"zi;<��6�����H\�0�;\�h]\�.�,Q�4*tR�������5��l�կ�$��,��e|w�ڹu��0�nݜ�hC��lZ�
b���E���&t�����3�"yS��c�.,�J�l�Q]mNp)��VXG"�h4�����â$���|�+%���k�?]T�i��+�Eu�.9%�dnŭ5�?�Zs^g�;̴�~-=ܹo;d(�Vs:�Aa,Z��������B���Xrx���h'����Y����$��6��-��-�wEc���:|](ŐZ�%d�<��	���{��+u$�.NL��S��4�����v������=��N�ᘼܗq
:?=?���W����3�j��s�Ž��8h-�pG�z�#�0I�"��s���C$���a�p����T�.��≯��d��@f�&�NF�¨6fN��@�az�����kn�`
�j�|�]|s-��3�Ɋ���w�q_�&��Lk�)4�Z��/8����I]k��H�g�f��LB�R���\tq��$�j��(����&��mŮo��Р��F�#�,��U��'���^�,�Bt��
[�q�J�u��}Uy'U�ou�	��__F�c;�8#u�#�x�?<����>�������s��[F�������Y����l��~1�S�����ѧ#���?]� �}M�.���a��X�	�=mo����9kJZ�t��TNǂɏ�N�d�
f��s߳�L5���0|I5j)-��zE��ֽa���؃�����w��f�g^#Ǡ��,x��l��s�\��/D�ퟒ�����ޟ�yj �d�}��������k�Ҝs�=l��4d<N��u��pŵ��ll���O�¡?�@Le��������@x��=5J�+�6�L��L'���"�Tl����T��mP��@�ؑU�*�;њ$��4�v/N��\Kd?|#Dj�cM߈�ڜ�%�>L����Ǝ��xJ���7�f���{u��pN��3�-i����q���ޯ��F��.��v���'~���
wZ��n<�I4̜l:p��B�4�F��t��
�>7�K¡ޝ��P!�X��1q�;�-���:�&�8�F�c��e$�<V*j�����҆l�?͓oC�=����R#Y�|,>Ni����"��s8ѥ��R;"�)��l*��:o��l���Q:�eA�D�P�S;n���������0	{��;��X�C���LtQ�����S�S���<�IJ��<�Y���	�`y꒰�2g�fY��dn���r�]�v�#�D0Z�L���O kΰL`�״y�5}�E�镵���M85<zf��-�"�����*Uj�m�Zs���k]QUu�]�>�	��m<N�����w��2FB�/T�ā���,�z�N:n�]�1y�c��V+�}&�|�\��°v
Gl;�=���q$�5l��l���r�	
%�����Xy��.^���<��X`$Fm�-�/�a蜈����������_Y{g�Xv�/DT0C?ר���[���z���2�Oo?y�U�>��[�̚�{�}r,��)!.=�3s�3�o�&u슳7��r���h�:�燵�ޙ=���$�%�GՑd>3��,�J��u���f���!(�=�'���!ֺ�Mo~���承���� :�=��Um�T�6"d漣���6���;QZF
"��@�&o��'�	��'�|Ry	V.M֙�Ն�v��S2�]�Bʲ0a`U3n�fi_5�G�����1Kj]��UJ���h.���z�$o@�κ@�u�ȿ��{!NL�8Y�_�5���==��|}����z?��Z
.�Z�+¤T�GԀ�pM�b�@�ƍ�����!w�x��#�ڞ��r5�UEd=Ko,� t	�J���悅81�������E:��8l�Z*�3W��[����)�f�����������*�O��頮q��ǿ�olkT��6��쉸���<���9��";S����&�1��>iZLMx� �um�p�#(���A�;ka�����6& �':�q�l���$�lP/�d�ӟ6�����͟���7SR�<՗�OF�����Ƣ���_(\�D9  �W�>�3��h��&B�"%dC�a�s��l��*�Ҥ����_�M�݄x	 ����\�S�_�+ϻ�֢��҅�Idw������D�\BL���;@ǜ,Y���#���⊚����T���u?TT_�y���\�;��nvVm��E!�u��Lt��Y� u2 ҇be�����V��H@�'}�C��v�q@���5�=.84�.7�,x4�Y)ws濲s�;k�4k�I�~�X�aZ����=C�=��7t���&��l�&�:u&Zf*�)Sk���.L־^m]k? �@�U�d.�>���3�r���!���>�֬Jag"�~C��K�w|���Kz&Z>B�	�f���#���"�U-��63�\���#��_�_��ל�[aF���x���q&�f    �L��+	�޹��^@�a�U%�7���l�j�S.�i2(�R+���2��ڑ9h5���"�bB�'�<��������E@�qh��M�����J�DG8�v^���$Z��XFU��I���݉�gb'؂M�M��o��������9Hlm�aWc�}ir�:д���L����v��U4�[�D�LO�?� �V (�B ��~�'91��C�ڐ�J��;�!YS���v�6O���b���)���~=0'&:$�n>���aT��j��?=G4<��G �kZ�9Tk��e�Lt�f�RTa%'���z�v!g�k��6� �̔37#����5o�~d�Yj�3�"����nC��᪏�r�{s�԰FJ9���U� ˙>�l�e�O">���^�l*"^zc�f�FBP�4�"ܞG��*.h#�0C�Q�|W����|倈sp�ϦSM����s*ܭ�9��!�k�E���;a9��'��7Ux	��Lp�&�����p�6��!�H������-<B"�1i5��MK���qB��}|��h`��Ǉj3������.V*W�KEe%�tv��3�U`Z �pg���#N���Zms�����f0wX��4���29�+�4�Zĕmn�3�7�L6��;�,L��Nb�	U�J�����w�n3�ܰA�%�;�5�ovD�A��VȨ9�&-	uM��U�Qa�ҷǰ[��}`��Z��.�-��8�,I㾫�����<&�~���~?��O���p���τ1��A5^��,��2�nil�D�}�-��%
�L�+0�R���,A�P�!�[N*xs�{�3BP�K��Jԭmp�	��7˪�wO����o�����&�ቑ��O��~������2�\t1����B�H��. b�~r�y��
O* Y�U���g��$�GP���a�%��������m���r�C_N��.ۙ�b�)Kb�]��ODi��E��V#�~6���c�e����R��K�������h[p��m4o�ES������$	o����Ko]i��CZw���x�����P�e*������\�uwp���-�	�V�Ǆ"��/����T۱����h�����`�4®�2RJ�*L�.�$�@�k�KF�+;B��G�h�?��O(t�U��q�۔�[�2�#�t�k;qYakY�V�p����ɱ����PMiR&��թ���n�UbF�=r��)/�K~�?DvK��G����sl������;���c�"�/c��!2<|tLu�����0ՇX���;b�\�S"(��S�)�:�s�e5�k]�D�B�GB���$%���8v���#c��NYb^��O��A����������o�h;�P�<(�q�
�/op���w�O�
�1�n����Z�O����?��&�#f��1�ߩOo�����1�c}�����������o��9�\���c�"V�̫��.F�ٻT#�&zv�](0u�[�tU���sTHD��>��C�����[�p�3�lq�i�d����(�C���W5�|��+~Ln@�e�_����V�!������w�%A�;������bKB��[	/�9m"K]���^��΋��E�t�>�x/�������e��a�*w��s�>��g%�us���(/��n�Emm�5�&g�)9���'���`�dO���Rv�9�S��Ф�U���j`Q�	0����0�?��ʢ�`���{�������;�O�
�Y�0�E��S�jB�)�k���%t"�fJrsLxG����o>���P�i��crM!��wα<�'�xr��kA�MD#�1��*��8�@������A-:�F�{?gL��ԗPǭ�z��pr��ڃ��Ǆ��C������]��rV�q� ���F�2����r=�%�>f_��������AJ��9;c�Y=�\t��5�u�|�)z�.+��ss��:�rg�5]�s�wĘf��^��SbН��.^sg�&�a�?��]g�ĉi��e���
k`��T��2]�	��@���)'\
�fa�Ѯ�B�c^�lb]��mfc�'*�n|���^��.D��*����B�Y�QB�C�W#JpqM�#��fF��ð����c��8�|�a����xs��F�Q	o��Ir�ɐR�Pf$7�q ��$n�&����)��P���9���)}H�_ce�����˙��2��J�B�\HBY����l«D�[^�ԯ�rC
��yJ�R�_��r��x*�ѹ��J9��Z�DOeM�Y�;O�E�^��wh�"˸Gw����ֈ
������]��Jk�7��WӠ&��Ϗ���8�?��"���\�x�\���Y%e-�x ��;!I's�]"t�rZ�Uqq�e�8�c�1�ռ�T6�NĠ�tꙈ���լΥ���1�J�����eI��*u�5u��gC�]��봞��{��;��h�ac�E4	;ITd�!n�3�ş��ukU�:I�tٝ����VW��o�}t�#��H�����k�}���}N�.Ǝ��i�гд]l�c�t���pBV�#m�4z��Q��R`��=�Ҏ�]���T��,����+i����I��ۗ���8�}�3�	6#!�6U=�J�E���`|)�26���;]�,�����ڍ5�����r�X�	�m��QM�YS\��X�����t�^~yࣼ�/�v͛#��s^.0$�".yd]{��@j�h�»4 ��Y��F�IO>��YfҎy�-�Cm�X�2���5�~WtѬ������,��ę����%.��B���f�̼�rHX ����iN���4J��'#��h��JÃߍ�Z�Ļ�_����Ā���z ̫��$|�DĹE�Ȋ��S#�.{M�b!l��!�L<i� �Ȋhf;m��0'Q�J'�1Z�-pl5N�^����wӄu=��>�k���
�����I�ԭ����<��a- �[�{eR�tV��w-8�ع�"qj�f�T�8+I��An���Oe�GJe#\�����U�+CC]{��>�"�K��.�;�y痊�Lč�6N�P�2�� 3��O7��1�d�*_�I�K3�]�����r��G����"�����k�9��K(�Y��Jr��S�½�ŧ`���B1��^�����+t@��uy�B"�w%ۘ���%8[8��R|�U�N�!4�N��ޭB�c�0ƸݹS@.xG�94��[��	�T��]8c�k:�F���y��9^�>Y�.��*����P�F�eߙ���T��bë$�c�&�<��񊵢��ƞFĵO�z��EG
����a������<^���)�����̆;gΪr��)r��\�3�Z9es�r��o8�����RZ�k	զ�N^D�^�����X�疠��ǹўO[��#_D���!aQ�lkp�O�/8z[�sP�]~7��� ���5�R�5�N0hD?>�`Z�.������(�L��N"*�:� =���VvfRv��wK,<��x6����_yUO��v�Ί�]�h|Go�h�	q�h���NL.��=Xu�%�L�����)٘��-QSw��j����fԭ^��!V_0�ʦ5�*�Ǵ�Wp��8�΄YB��.�I<P��I؆��(d"O�F�zB��柟R�5~;�dn$Ѯ����d�5��LĞŢ���z�G~�:��P�j2��!�b�:X��'B�BOER��D��T�Nܱ�}��#(����F^��ڋ��$è^����i!bw��M;>-+�j#,��f;.��������-?M���NMf:�@�B(�#�T1c���4Y3�[��q7�q>�՘̙�%�TR�Yq�E�H�+§N	a\��B5��:�*�bi/�RO��y+�G��:v�S�v������j;��Kyz�HF���*�u{"�ö�vVc��v�W���I^�� js/�0^�w���
�5ꜻ܈
�a��g��n�7�wx*~����6�;a�I^Ip���wN�D�)A_:9�h�Ǽn �;�"9�tt1����|	�iD*�~i�D}���&x�M�    >)!Ɖ�n�t-�wC}ݚL���_f9P�׌�A�͙����A��:�/#1�MDI�Ij�R��:m�Lkݑ%V�AS�	��?��WǑ���"!)�yd�-��
��bS1)\h�7p��#�R����׬�5t�1�b-nD@0d+y����b$���UBp*m���m%O$��ͱ����S�ھ����	�l0�cX�
-߳�nx���@j�>=��	�䠸"SC��*{�'b� 6}�b��.k��K����V��#��F�x��v�0��o��8s�< n��g":r� �.���y����@J?���qt�tSM���T�C=�e����8�O5�b��Bu�ēf��Nݛ��8]�x���l��� p��Wz'��CXt�E�(�hu�p{�3�%�	�U�g� )u������������ʷ��.�9�����,����]�����e���beoh�m������;��2��e���vb&�,�L�'���n�����W/���!���p��@`sj�]�ߝF���\��i���[�q>ZO�=��
�'�S�T��S����bcg�`����36u��N�V�����j ��a���z&⮊��)2
��c���y ��a�RC����O���[x���s�!��j��v[�mWX'=��-�YzQg"*xA�r���D�u�u�$}ѕ�S^��s�<hOM�@�ئ�]ET�ݐ��nϯ�Ѩ�RMN6��Z(���~��^>7@E)bq���1�.�%�j#D�˻Ԕ
kC��JT�.�6p�Zka�XCR����Ut�sLpC�%F�a/)*Hȏ��a�]&Jl�.(�ֽy4+� ~YKr�TK0Vx��aGt�������׃6;����H��ݯ�v���QG��a�����ۏF5�D%��ϯ������wk���;��.���,zK酪�I7���^è����Q_�{��nw�#�s{">ȹ�:�@�\ҩK.�x<�i��"������s@CB`rFg �픈��[�v��f"�G0�2$3	5�&�jp��6&rHZ�'�2�A�U!l�Np�LS�k$�N��~���[kU���.�!��D|e�&�F��"���~����9z?t�T9�%mJ>lu�ة���Q���ӷO\|���>�y��|�f�
����$b瞈a��%��=��p����/Q�N;��򶞉�~��;Z�`��'�,��d�tc�$��C��)Y��{���{-
��H(�.�G�i��>.�^I' �g�?�'��)�l��䅎E�Q�ǡkB63]��&��C���;F]u���Mf?����'|;�t�Jc���b\m�\���T.�gc�a����sl
��f܂�ڻ�Rz��]f�Syh����|TN�V7 &�=�{�=���b2l#g�ˇ�Ǘ�i��p�ؐX����B��KwM�����Þ�z|�dx���N����Y��G�J�S+c8��J�~�!���u{5�)��zY�֏1ᖉ]��sm���7:��r���ݺ�9<Y}�3�0m)Z�RSצP?�shw'�W��d�S�_�����¨Q����n������n�v+���*!��g3z�C��j)��m�r�x"?8�c�JWM#]��[�F?�.�?�C�8�!�������2�uJ-��%=q-aV:~�	װ����54O��HP5t�@�z���m�}9]�cY��Ө�^o�+9S��e���M��M��'8��|3�\����3�o�2�q&�B�5�� �K��!�}��!U�K�2ٲ���"|��Z�R��
�ݽD��/'Tl�&F�+L��qfϾ�5�j*�J+��]�c�V��@`��S#���'��72��*��V������j�ЎqKT ��Uf���D=aOt���"�
ft@�ߴW�8U�T�l&x�)�?� ��c`�7 �:�~�Ĩc�P(=�R�sѤ~V�,�Y���Z$������V�sL{GSG�!j�'V�L��7
.eJ�l�ف�0U��X�]9(���K%���ɐ6�#��)�N�Ss9�ݦT��W$ 0�!��¢E0*�b�U��P�el��ˍ�ጌB�X�Jvo�: �%�4l�(��/��;�DR{D)ɹO����`�+��g�Ľw$B��b�%*D�X�QRvٴ�TK����Z"G�c~���ǯ�*SI�A�R[|��O������a���z�!p�{�K�s.Y��)��m<�����G��C_U�$�	���5 ���9 x��W��sH��K+6��ItQU�3�D�"t�f9���9��E͖R��ɤ�`����*^��6�>��K�j�Np��wy{[c	w�ԡ[m�\�~��eSv���F��5O���p]�Va�#L��<�AMq�?���@�!ک��Q�G���~�~��k���~��p?����׌���YZZ�3k=�P��w�Ep`���ވ%R�1��������N�����bX�M�!юhZ��T�S���g�,]�1�p�������0&�o���5>����j�����G����ߜ�YN��j��6=n%/Go�2�;��곻3��}y��8�Rf]���tw�M�*�$�J��9]�.:'V�,��Z���ŃA��
p�sֱ�MW`�qE%yc,�z���ky�pLi[�H�U�(�%�Q���+v��o��/��T��v�:�Ta�P�}���1���T�y�~��pQ��{��@������FL��� OJ M(��<��m�pn��$��p�JE�=�LD�������앥_Y�r��I��U�N�%IuE5�EkD�s�7�@�ɵ���ˆ߱�&��UR(xɖ1�'b��:v�)lW��	Y����M��/������𤣵�ߺ�'���O��q��<��g�+�\ƒ�|)�~�s��O��5#��k}9 k�ktm`�]�����>Xj�Ϟ��ç��ڷ���sc�?�X�p%�%�7>)q���s��P<8�Lh���W0l�B�*8��z�B���(v�����	��8��p����w�����E|���;��@��L����Xb��Ҽ��o�Ȳ}͋UC?�6F,����(o� �^BU!^)@�M�D��6�S-�ƣ��Gw.rх��
m�O�dC��=6�);�����|�_'�p�F|��?rطC��ϟ���ߞ'f �Sw�U�=Y@�v쳥�xGV|��u��j��fJ'�5*��v�f|hV�Sa
]�Sة�T�MT����y��@�MX��3��
Lig+`�Ʀ�c�u�XÃ�������6(>�)8�>ď�y���ݏ�>�i�����1|xɮ7j������T�8�U���.�l����O��w.Q�p�؎0t~�P�+��G#��#FQ��*�`����c?���ހ���e�5��i���j6�Lt���T9�	��:�wp����$c���H1"�
�b	�M�<[jO[9k��I>�6�MwY�P�ĸw?9������%!c��HB�&�BY�4����W�^dTxK߽�~x��/��w�ݑc��ۧ���G�e|��f���K0��
r�r<�lN�aG3�a-�4� ����XC��5O8�g��1�ݙ�����G�"ч��љ���R��E�ex��\H����#E0����������?v���vo-���h��auo�",a�ٟ4�4ڲ[���O�z�'[����{8��H�F��cO�
�åh��䍙(��(���{}T�}�$;2����v�B���a�������X=�XvUD�+�=��U�Q��9����h̥�i9���
�N�J����_?"��o���G��x�������C.F)�K+0�B#4�ˈ��TZڔ��fZOc� �%����ok�s�A*��r@�L�I�m�'�3}�`aVk(��!Ӊ��+��w8Z��������U/c(*)/�:V������>h=�h}s��7v-Mҽ��j�p.�vm�S��㵱W�0�26��?��n�[�oǊ��E��!��Um��3��a�{3�\r�D,x�� �  �n�S�ꮖ��P�u]����î��_��y�ѹ�k8�x|3ə1Ï�K��0�o��ZfƟ^)�)=]�
��M�J���q��C�_�(�Iɍz�֓�ÛSRlm����x�x�6ʱa#=!�}?o׸�_��p���4$S8�����۫��e�;%�PKv�3���˱4�bj���8�y	��Gik���9߅=o5u:���A#!���$�Ͻ��Ƈ��q��O_�~_C�d5�U"������F�n�8x�P��#�%!#O��nP3�Io���wpk%������+�J6��xg���T" p�]�Be-�Y����B���n�i��lS��w}���Y}!�#��
+��*�I���0���Q�~w*���9ͬ
�2r��K�ᖨ��c9�!{30i�4�*�����c7T���;Tl��JH��w2-�w�D�a�E�e}���0�t({��5/�a��Y�*����έR>s��"��XRv���;fo�@�6[v����;�"��0{��ZҒ+0n��,Zj��@:�� �]r��eZ���&�4�/�(��ȡ8�EI*y<��ko�
����!ia��Fԗ�e8�B��=�^�#�O�&��S�N}e���x�Q��Ʉ�mޏC����Ul��b)C��;���D甆fI\��8E�h���Q������7gXGt���ްI۰|(��M��q'-��m�a�Ϛ���S2C*(��.��*u�@�!zqlw�����n�O�)�����_��1;D���tX�:_��� B�Wv���E��������֐-�":�R�dR۠�f��~T�m�-x��
�c.�61}]�j�3]��͏�T�W�۶�~��t�����#���������8�¹�0o}���������A�5įdT������)���ѧ�|}h�d��������H��?�_؜�/'X��B�фB��~�P1N��V����������G�      �      x������ � �      �   �  x��TAo� >�_q�-lc�r\�k'-�i�&B�3.&٢��}X�k;rm꥓8���{����h��2�ŵ�*�C��E>z¥u�A����	Ka���_�|��x���Z�G�{kp�t�����o��RI%�ip�;ȽV��l.1���0H���:?�~^b![�!�,�j��<�-9��ֺ��D[�ww��#a�<�������d� +^0���V�3ʣ�]u�G6i΋�ӫ���u��@��6d[l�(ˎGhZ�U�L��J��
�������S\('��4a$]g�����ȃWG���V.k���,�
���X���f������0��y��FhZ����v �{���Ժ���Gg�r�\��,O]��;�c׌M��-��Om�w�.�LqInB�������=��}��0��            x�3������ +      �      x��ے�Ʊ.|m>��3?����?Zs��5��zdyE�4�&� ����;�}�v��;�LO�硪P�虖lIV�:�����2�2���������~���UW������j��򶳮��Z֛����ɪ�:o�ۢ,���*��*_�����o���.���X����v�J~2�����?�g��o�ߴ]�m�����;�s�$'n`���9��;�MP`خ?�<1��Ư�U�m`d<��uV��VUà���W�w6���˼˗s�ȁ����O�|���uSt{��������~D�ɛ�zo��\4<��0�m^-�jQ��l��X�7yYdU���`Ġ�l�[E�(wˢZY9|Xέvw%3�^�����s1D�<�5���F����h��q��;E�5f�o���JL�]׻ri�U��A��ղ �������Ok'�_032�S Zˬˮ�����o���]me֢�l�w�bUtY�?"�W��G�Qc�z6gm�"�r�=���d�$"����\�I�b�=���B�l2%1�MQ��R���U���ź�G����UZS�`X�E	�*��F�=}�/�ݶs���Z!_�
��MC�|����{OA
���π�o޽j�!�3%љ�Q��q8EB�g^ �������^[[k�U�0�4+�|,���
�>���]������.�OM�y���V2��jT!,gEcշ������� ��n�ʲ���+�\�a�dŬ�V<G	��L�ϼ4b�$db4�cg���L����S�D��n���c]���޽��ܴ�_������W���稡}�rB�Ț��@u[�U.��-�]R�M0�
#;I� 	�H�Gϙy���篞��D�Aٵ &x�L���<*�z�fi�8k�}x
����]?��)�D<K~�<���z�R鮺���~�N�?\�K-���⏿?��Ѽ�G�蓠��T��7��|�q���g>H�c'n䄓$������'H���9�����`_��9	�BU�:P��ru�>b�Κl���
�̫���a#�����+��{�:���z^��4X�s:|\�z�os��m����1����[���>4��5��j���$T<��K?Y4��iA*[�LE��4^E�#�^ {��h"n�I� <Rw�،���o�fx�d�
|�������B�R?&z�A����s�g�o'^�8�$���nyy�k	���E���m;g�mq��N����0Z�s����*�~G�:��ޒ[OrHm>��}�Ę�Nr��g��M�H��f���Q��z{B��	�na�^��aG�6+[�0����%f[h���T�һf[�UF�Sj;���	���k��@��XD6��V��fq/~��X� �����2[�l�����_�<����nQb��>��a���9Sv�w���Y���=�&���]�-�O���^|&�M],�e��7ێ��b[y뫛�W;����bS�yo�=[`M�[��)��㺃�`k�ɾ�4q�M	D���(r'I ��5M���Չq�-���.�\0\��y���W�b��F��AՑ�O�����Ysx�GS�Џ��(��N���378��Q�u�!���egB9O�}�{�
�8�5�/<Fl�ϟJ��o�~�N�`��G������nKD�b�Jf}[%��	�``7� y{x����c���x� ��g쿫Q���l���5Y�0��q[��<�"XZo���Ӻ��y�GX=9��l� �Ñ��$l2s���`�҆n�M�ݿ�mKz 7٩L�6�_������^�c@�y_�i��?���qm���l4
L"��� Of_���]��;�tU���Y\��-�}��d��\E6�-@�� ���� t�Qh�����������~�!75����.�j+��E����B�w4	�?)g+z>oX9��V�M������1��l�Ԡ�����~|���՚%S�s��v��?t8Z���M��-�;�0um���>���}��W<�ak���(�qxGM�z\0���q�`��I8w�I�K�Y���v��[�0=��nk���*[�ȁ�/��;2�~���VD��L��⪐����rO')i�>���}Lѱ��V��2r���$`�f�V�y<�v���W9�h~��qխaY���Yg��ܢƹ+ 3�Rޙ�i�~2E�f����xC��=����!3���c�|I�Af�����
�aQ� 8���f�̿<���p+�&����]L�49c�$УEI�]��F���D/�ڮ��ɐ=	̼ٓ�?�@��^������sC��cJg���+�9�!I!��.P`sk��0]�[�hCg�l�uvCQPp�A�Qk���(K5ٲ�ǁF�8�mp

�/�$	�P����%�"�-�2"tm�6)=���>���{]�V��a>jM�o[f{��nY�����?k�� �/��a�� ���|��~ܻ-J�{�9Z��0f���h�G����z��i���By&�'5����tT�>x������E
J��p^5t���� ���E��ZfbK*� q�g:��eh�CE�l�|��`��v~:
��$d�?���X~ON[��j����^��Y��\ߎC�@�P'!���)�ޢaKrQ�usf5�������+0�VM҉F��p.�~��5�x'-h�3pޗ�nß\��_�Ϭ7����Y����0���ߏ{��;2��&IȰd�R��rU��Uo��&�;�׃p��P��'��O��x�z������R�?�d�T�n�;7���:��ݓp�3������8����Ǖ�lV�<���A�S�����AB�g~p4�҂ u� �J���q��~��16�gm���(����d�p�D3_F�����Y�a�����a�	g����>����v� t&IȰt�'�Ϝ�v�؏���A��kg8�
��-#����n⎶�NB�y��}`Xp�Dv�q�N��a�,�g��?ÎߪWB�v�tt�)Ȯp�
vM]hy����#��(Ȯh�*"H�T��=��I<R�:	�΂_�I�M]�x1f���y��Aw�����vS?����	���_�Iq�|ǎ]�q0�'!ÂY(#���z�`�\�˚�v� c3L�j��|Q�YS�-��ܪ9���B���h�PyYH��k�����/���+�v�k��`������PW|_/�p\����HxL.�J�����8	�t(!қ��� �S�������p��Y��H��g;��?5��,L�$�����p�,~�����}'�G�� �$��<	�M]�7"���o
�ȸdkW�� >���:��<�c�n���W��A�(S���@�!�<���7_��T�9��������N�0�����	
f0:�P:�*�G�JԜ+�åڢ���a�Yne�F����-+�h:UvS�DZ��ى�o��z+jc�j�	��ۼX��'�uWM}ۂ-��lWv�r8 �]��US�V�/x��[ϔ����/��f��[���p@zj�%�{�a>���qh~��O�����N�� Z�o_��3O���&ϖ�f��:H�
��Q�э��T���a��T�05`�cR_cv�n�$�����/=͎��E։�� uD��M�� A�����0Z�Sp3��"��s8J*洰�Nn`L+��Tk�Nk���\�$�p��x-r�z�����i��L��7�F�N'�ݙ��0b�
����zc7I'��V�?��gȰ M{�o��i��a�,�ʇ�³ �� �R$dX2~��;�����G����7��;����@G[R'!��Y�c݁��F���6�ttAa�p�,��U|�����K�q��JRq7��N�g}euEW�ي�QT˅�:���c���{�,Lp@[̕kU Xۺ��a� ���z��2���>���sQ��eQ�����/w��|�E�-x���_ҕ���S��oգ�Yw��*a�"{�̭��W˼]4�V��1�$<*Q���q��������AgI�    O��M�$��ͭ5[�죉�/�=���!�C��i84�N�,r���L�j���{Qc�o�����s.��Ad�C?�m��J
�z�?�-�EȄ�(Ah��8��9=���M�(r�`x�e�p��,�:���s��&#��j��{,;�j=՞�7����/ʸ���͛7'���2z��<{v���)��?��W�����5����N������H1M��13EBVD��P����KQ�
nA���,Q�K��"�T��������N�$]�$��sgQ�	�ac����P�ڼ�e�����@�����b�-_TDhD��9�_��5D��|IEym��GE�)��չ����˞q4�'Q��TG��gDrx_O1��<�c?�Fba������C�����`pr-��Mc��^i��T�_]��<u`�5��v�5�p^�f{����t�s�P�T����5��hCo�3x�����Npͩ�C��
�ؑ:�i��x�;Q:J�7H�T%�C������_�I�U�ZW�<�H~�|S4��:/>���`�m����U�ɖ�PLYU�����j5���� ��h�w^��\������?����VϚ�k_x>��z�
C]"�A�,1�EE$��Ѳ C��#"�!:��䚓!1�^M�a�*��?��ǯ�����ܺ�q�>�m]��7��0�Z+���c�g}I|������l��l�/Gܼ��Œ��v|��/��� Fkz��0(�Id��V�HT/���:�˲^|����m��-t}r�)��vZU�T��+���ծ #HX�!|�NDJ�������9i��+�'v��?��z�,������rn��BwtU�^��%�,�%m6˵~Wv_��߭�/0%��o^�:��g��
�2�5���F���?s�=�l���y��Tr�X�����3�m��>��9\�O�$)B�����"vzK:[�!�d�cQ٥A����d�*6��r�AN�.�?�^$��x�����0d{YJ�!��T������<�'����S$�H�̢xtp�KE��kX����7�U梲��F 4�W������J8K����-/M�%�q,cy+�H���lի�9O��y�j?�ۍc'�.:	�+�%Ҹy o��9Q�M�B[�J�*k��E�ݖ�Ӗ{Z�E3r���J�ٓ�#�\<���ڹU��a�|�h�G~��$��t�GS�������(A?�p˯4-Ҫ�r�����m.
W���fֈ��Ty��=��JT�^��<@�襦���9r@R; 6D�	��bG��+�+�hw��{ �&DN+K���˓5�_-UH��IuoB��_$_��UP@��a�
���M+�S ��Yu ��A~�
���X�S{�@�d��^X��аo�%<U~��w8��,T��R8���;��q���	��=�K=;t�8t�H��Y,��s��}Rn^y�}���	;����u҆�m���X�/�U��h�Y^Q��y���j|'s��3F�o{n��o$�q2�=�H8��^\6������j��_��-Z��>K��Pr�v8�7�������53U��惎w���	�%M�A0k@����;�[4���� �$:�fB�����7(]��7��^����_�蕜_a��؛V~) ��;�yC��V~���(��2��S`@���`̶&A?�8j�Nj� c�q$��00H���Y�����f(פ9vm����焇���
B��`���)�� ��c�fʩPO��lN��-�Җ8~F�:$��aG�t# F�ݕ
�����M4ɾ�
*#�wGjC'!��Y�-v��.�w6a�Сȷ��@e�2��#��Š �~��;���W��OdfTWo�≽v(}�9Z&\��8}���/}l�sП� ���GaZƱ�ɕ��\�X� �H���,��SቩsOw2��"!'���#ڠ� �m=��M�M􊒮��Byw�/�����t��u�/��&���U��Z�U>5���Q�x�3ϵ=/���N�I8�h�Ěo~�ەsx�U^�݈�(��;�mR-�҈�*�:ܑ�7������B�n�toӒ�\���`�b6g��F�� v�����А��R�i|ׄ�<��.���)S���o�Q(C|�pr�Ӳ���@c�Cz����\�)�Q�P���FQ"!g�9�B��c��F���^��/�f�Y1g�?���H��p��H�4a%�6����/+*C�dxZ�Ƿ"V�TQ�� :,�up��3�����.5�*IBd��8�6���M܅eJǚ�Y*�:؀�q�;�H�� �hh?$��fq��F�(N?yT�q����?�R>�(#4%)R���gD+E]�N��� �ϟ��h�����4��n�AB]�i:����pG�
^�`�Xl�Z�=�W9�C�l�M�%|�J� ����'��9�߯�r۲_�j��[�E���G���W�|�����[|�U�
̯v����{vzz{{k��uOq�'������B��x`Ly^��AB�sf��̞�����7��X���$0����vM�\����m���X>���B�㪖�|*����n�J�E��+��oU�]hE�]$.���r\���=�
J�C��F�P\2ϛ%��s��1����M����Z���y#@\�����\�lPz*��;^�e��Z�*6 �</I�kn�p��,��	"�����gpM��i�DO�(�U��l����J\;iM ��/AuP5~�j��T�I�=��@�p� �f�mH��5�X:ـt��q�����	o��}�Çw�� 
���F��0��ȏ���$�w0K���70l���ɚ�0j�V�8����U��m�`�f� �y�pS�9� cv1���0�o�p:��u�셶�k㥃���L���KǮ@�^wGiZ(�PUQ<g.���]sN P����$k�!�1D�b�7c�u�^���Ӟ���c�c=�w4�r�F��\ٲ�[���枫�밑c�ϵE�?���(t�a� ��᫲�����p߱�$
F�A⇧�}�|f��
����*�!���p̩w}"弴��@N�E���o�){%�����t��4 �dRg�B}��r��Ij�,b�7�"�	��!�V��a�����@�3�ؙ/���R͋�ԍ�)
�Û��hiؕ��h��!i8v0�y��m(�̌�p���HA~����z�5��&x|Ei�9�$�H��{����~�!^�B���{� �&Hgp6H8�d��p�E��7�B�QQ�S&����_�VVڀ0V���79�@x�M]�`6�%ZK9����	A��M�|�&co�j���}4�n8�DŦޮ�Q.��τ7~M�.�*r�p�X;~��Ԡ���9G����[�;S����P�_����7��_��`�� -�a9e�	B�&���#�A'���T��'EV`���q��͔�5�d�~4 �ҙ�8�h5���'�~D��1?��0����"d9(o�i���_��n��
el���D>���-��s���;Y���`��!�Zw���5ܬ�]����O��;���3��C\���Q�-�&�!���Ca�[���<Ǥ�C��#;��ʯ�y�E�(�=ov��� |�L&2�/�R�U��\�;x�~KF1�y�������椱��Ȟ�/f}Y�&���¢F����.�^S^1�l��D��MV���`���3�C/��֙A����������H`z,Cl��	$��E�v�ӡkW�x6E��6]Ӧ4Z����m�I�L������>���k�	�Ez�"�yx_Oy��K�,��'Ë7���
fixXIe�z�W��IW��kf:�������7��Щ8Y'쩎$$��|���~��4�)�fχ�W�1?�˾���Ż��s�V�7�`�m�u�pxAa��A�,���
�0 �s��sglTܛY>���&I8IBfEp�G��,�_a�Q�"�l�5/J����"tK������ѭ�Й�� ��ya���<�;�>!}��5�Ae�D���OT��S6����EL��/����/�    ���S̤9��bm4����e�۱��к6H4Kf���v��b4*w�O)�\�s*zOn*�!�ळ��E�+���ۺ�9A��g�d���1�s�U�ʤ/b�|��}S�ia���ew`�n�W}"�z�N��&I�1�D'jH����e��d��͆!�ם|9�u���^_�� rnf�5�je�=�n�X ���I�pG6���=�N�����䡂���s7[��c���
�N����9��q��-:)%�|׺��N6y��г��\��\t���US����C����槪\N�Ln�I�%�x�#Ţ��w�A��7���~�;��!�~<lhcR�]1�K�b��^դ'Y���2�)ڝ��:N�U���M���WifUY^�Xۏ�c�=|b}��C�֌�rx�Ǔ�B�����E�$�w�N�y��y���
Y����D�1��M}��n��#*br�ޙ�N&�h�:�Əα����I��]^�C�a�����Gn��5R߳=PYށ��$)��R�Ei����Z�����&o�rǹ�$)���=���n'�?�w�ڠg}/�"Ѹ�BQMt�T��<z&���ً�h#>ƷJs+m>K��~�gQ_�3�
hRM�$cCD���I�DS$�X&��)]�b@ُW'��y�"�@���w���ǮUF���P\*1����/�kN^lGi��ԓhN`;����Um6;R= ��,��P \3��{5\���[�� ��ĺ?��j��*J���W����,1#��ۊ�=G��t������������������e]���Qy�Z	��9.f7��7t���Y�7��d��N���譵#ֳ(%�7���6�aٚQj��"fS`����,��O� ��[x�$^η2�r�Q'3'�I�Y0sU��9{��ϖ�؉c?�")93�ڎ��9��^!�o��D3 GFu�=�������a57Q\��O�R��@��M����=�^��������D� �B5�� ���[kΰŪ�G�u���Z�
����#�OlJ��4e��V2�m�r�~�)����ѕ�m�
�P&P����/0߼���F��,�A���]ǯ�B��r�	�A	�I!f�K�B�O~xl��?,t������+�u���  $�M�E�r��5w��r[s�����^U�d�+t���EB�+�s
]29��j|���T�$����Y��k7���⟯Q�M��i�;�?E�ـ��I[��Vԑ��l���F��P�9�/��L��$]�������D��oi	qOלw��h8,��\/�o��Q������G�� ��Y !��%vVy8I".���IK�Jp��;�Vp��;٪Y�	�����ҞG�=�R@�m^��#U9q}==9�Yg�8 ������(e5FK����e�I�BA�!�����|O$tEE�\���6�"�&3m��\� J���}x�0��<�?sj�7 ��$�)�-�/t�q�9�E�sXL$�����㽰���5 �Bl��zYR�ak[��d�TfdQJ���ۇC�z�HĔ�)(���?�� ���¤�Q���ls������]_�� ��~�-���O/�|�����S^��߭V9U}�~UW'��k� ���&g�=Rr>�9��r��ESojB�^�-o�=W����W��p���l�����9^�nm׏G��H������� UӉ��#�$b�p��T�a����`v�򛮛\X�®�F��JmF��]P]�ƖyT�Ep�ِ���x�#�[Pݓ����\֢;�\Ʌa^�hr�����c�l8Ք[g�c�r%�cc�㜳꘳^y"`C�ګ��5���i1;��w�0̛<>q�Z%a�#��Qh����G�K�r	N!Q���+q��nsF��#C0�u4�!<r%���K�8u~L����n�?c�c9�,�;n�h�;��v�Q0I�9�`��f��B�7Y(�[��o�@�V�k}�������őT&���3�	ڷ�3�Gs���	�f�A��"���[�@tƥ����px$�y� V����NP�y`k��.���0BP����^Ε�:V5-Ę��E��a��M
���CP*���ֶ�����ynN��|�i9@�vU<,T��A@в�3br8w&"
R��k�����h(o�&��j��m}�p��S�œrI��(�ŝ�~��l�8�b�-��=��3<ܐ?�3�wp];��$ʲA"V�[�ǿjV��a:IR��/y��ť�J���Z`L¾�i�x�ϛ��{�J=��&e`z�JC��F(��̙ ������~�I��dD/��ʔ
#4�Giű��ϳS�Q�3K��j�=����c�T�[�8���U��'=S�1K뵊 ��EyAG8E~}h�/28H�R<�А(S��4� ������FkĒ,�DI�Ǆ\�G�[P~2��Q�״��h�G��������.�=�tȗ?�b䭿�K�-��-�>�}@L�X������q��0+�q�1՘� ����ax�$-|��
_<{1�\;��|��ޚ/�\9ǋ|h $�78X�]��~��o߱=�I���I����*ռ��q�#��� a�t��Tϱ9\� ���u(#_�蒵�J����O(.L�m��\�|��؜0�-�.���#	}G*�������41�8	��y��s�"�'/ȹאP4�q�!�%��7:�?B���Y�\�]�q�>k��W��w��<q�O6������m7Ff`O yK@޼y{����8�A���j�$%gz��GUmd�
Ɠ}5�*ͅ�w����L��������,�*?j��8�\W�D�-��wK�Um��		�CH�>�Gg���0���L=��h�!�&�E�0ʊ�����r$�9�%�&n82�t1?��A8���bۛ�*ه�T����z�����c�Ϳ�o���Ly��u �
L2 �܊ĉ�d� ��`�ȴ�h1j���{qD M��8g�+�rO!t������L��KF�S'�\`�ꀉ�5I��,��zUQ���0��8΅�F�ِ�~#v�4�Ņ{����Z���F\@&��+���B�a���!=���	���Ō�W��� ã�=�8t�j� ����"c=C�>������-�cIY~�5<�5@�z���$H��&��ۇ�6s_��b�Rˈd������묬T����` TFL�I6��u�,%��qo|�W�7��T1�%��ޕI��g��v��(��S�kpMeo�A#����C�!�ap2�@(X��
2��6L����?m�~8�}�A����w1��y�RY�UQ�#�q�E�Z?t��]�A"{37<���k���/5�=�$)�F�t�c�Rc��(�n[3k'�.Z�6�"�;^\ߋ�Oޠb&���EJ+�0U]�?t$?��! ����_|���j�nK".P�Y8k����4�����'����s�s*�c�'s�?p����Љ���A�%g�����d?Β}�2Ŷ�N4L�0Hj���2-p�B}�K�): {-*�Պ4{��uX�N�k�l�soh�$u4sUK�czS4$#��U�!ܜL��L�w�=N��5����Bo�t����X��D�hz:������nba��T��Ɗ��4D<(�EG���
.@���G)Y޷��)�9�hsMc^�)f�ȎX����R�1%E
�� D�������L��d�j��+BS6���^r�-HkN�bY�!�R�?�}���!��_X�1��ߏ�B��]�p*.�ϼ�Nc'G{L'�r&����r�̗3����&Ij9m9/hI1��~tOD|���~�	'�_ha�o0��:Uv"��;�P�3��(��E������-��d}+���B�j��8(�Pi��z��j!��<��[���}m6��(�XOnQ��l���|޻
�`H�ݗ���s"���:v�N�7`������<c�W��Ē�!��u�P�$�E�?H�i�>��À�A"�    KA������ ~c#�.�l/N�ټI���<����᪐'g�Oz���ȪS@�lV����3B��j���k[�>=iy�c=>?2=)DV�^d+6���0�˺o ��)�j��>�F-/����`O�q� ����xЫJUzQf�zn�	�sAL����ؗ\��GO��6QҴp��~������U���\�x��j(����aK�����*#
G:}e��^����Yr�^�C0n�pc}��:'���S��x�z�����N�0H�)�z��\��A�D��'�9a�S$%�?��/V�S;��(��(A��㧗��ɸ������/U�
��]�!H#|����]ٵ��B�OmE7���f��m��e�j�炤S�Ѿ"��YK�f`��5$��]���.�Ӭ�	� 	�$�"3]`����Ifzv�QL�3���⺡�MZ�Î7jΗ�E�a��79zY�{�.dù�`S��݊	&$���5��h�L9����k{A��IMYz�o����P��O�O��u�AXb@�I�0��:���:a<ER����%��` @x�jE	���'��SA�/d>�Xc�u� ;�2�N.Osn\�_ו�s�S�,�*C�z��)0y[s8uΛH�Q�Q��D��~!l=�E]q������8�6��n��J���z����D�>fm����Ã�+պ@� ���U���n�i�0�#h����Y��n���D�A�VG}�%���Kl�����k0�<gV�8�g�z��L��x�#C��x�I4��K��,A��5͜��5w�����5��>��9F6_��o���'����{,Z�A� ���R�����=�3�9��B���8r�`�D[)���<l����+�J��}�LM���WHr�ĎfF�	
}���4@��0Ȫ�[�ý�1�A��{�{Jl��职�q��n���ʬZ�(�}❹	��I����!!0���g"�^�`HOR�s�^��V9zm���7��S��%R�,�U����8ĐS�5�:�)FlD��dˡN�n|-L�"���o
t���f����N9�$����|R�:������\!����P��Q 0�u�|z�$R$��������j�"V��	9*���=����4��v��k����2����rwuB=~����"�B�J��1H�������Į��A���{Fc�
�NH�p�>���`�*���{���i<�J&U��QӲ��;%H;���|$�ҵ����@(�L��4����(�<��5���T5۲��V��J4|B�AA��D�j���5�Pm$�ꦀ���P,�}����D���F0�Eֈ$t����`��ծ�_�-0�w��
���3%"��)x��V���4Q[��IFY"h�j�� A��2��͆�yr�>��4��p�pr�ܦ�9�i�����\���z�5��Z��UUR$��Pk�4���%�X&��k9�Ó�Բ(N�&��]<s����z$��CF�%l���˫Q����P)�$��f�{j���]a-XIxe� �s��rYK��7�z�#gS]}Mɘ"�ɪD��]ȱZ������X�_��
É�
;A���h1n���k���*+��B��+�(��^5�����lO��//�C*<�"�B���S_��
0C,�ӛX��|�4/��A�Qc�\6���u�h�Qv�����O���3P���C�a�[�I2A�i�����������6�Z6;EՒV�.ֹ�0y��������P�ٶͅ�@EFe����E�d.WR���S���I<�܉�cwJC��,�\�%x�A�QiKف��$&~vf��n�S�a�f���/��-�b�v`����T����E��I�G=�h
�\�R)�r�`:cӞcG�aK�+�<@�8y�(��/\K���[�����43��o�Uf�[śD�$m�g7=��,��;=���wͥN�{��;Q���G@�JI�����k����-z�8�V�B�J3Hoz��c���"�r���s<���t���!z�� ��&�R3_�U�4i�!�p�`��t��v��~�rB�6��Vٮ}N�y�ְW�F����x�}mz'Ȩ��j9Ԗ�Ѻ�{�y�����F�P�$bSlr�l��ǎ��'I�Mf�Pn/ ����W4\�ւ�n(eCw؄��Q���Y�� �}/r _M/����酎�xi�DS$5��7=P�`������zq�T�NRӋq��l�w�����Ijz�/pz������'��Z���.f%Q�ծ$��(/��$,;F��}xJϸͱ�f�Ṻ�Lg05�����58���~�E����0rGF��$���:R��Z4���_�p��7�^^Z��ϭWh�Wyg��.������-48;�ێPV��W�w��0>z|� �Cod�k�J�����B>D!��QȟG�#�Nji:<�${L�M�Ck�m���1�.[��U�#������N�-b����z^�������$��F
��;�2[�'�o�AX)�H�ǩH�E�֛������߿[uG���$RLD��4J���b��m���G��PˣAk)&����Á1Y���:8�����[:|��� S�p��Z����?�ӯ�>�^y��vYOX��G1�/��b}b@���vW�/�_�{�Ґ�>E@lX�"}��\5#&�yifR-Ϛ�>1B��K����;�D�'9��'>>9s�q��]$�$�xas����-��oU�![q�����ڥ;
r6S�=wT8���0�Ժ׃���q�6\�S߯�����An�#�؟	Y�V;�V	^+bޚ�7
�z�����i�o���9��[�6Lm�MCo�'k���)p=~�������N�ԉ�I�Iq:m��ǃ6v���|��k�����>�j�\WzU�bx.�?TU�UXe�"Hd�&�̤��G�	%���"�It��ߓ�L#�Dp��I2J��I�if+��? Uw�M'���o�~m�m&%�̓��#9�AG�ʛ��!�����a�K	"x���D��M�M��w�f�A$SO,�����2�ꞁ�y�m���L��k�px
0;5�F/�߅��7鋇�kʯw�����K�)-��%}{d��$����V�;���X���7��Ee���3z�	k֕K�E�y��r��[�#f2�LZS7��b�%�*��zU���;Ey�7.v爃8q��E�x�o�_oB;�7ɍNR��с@�]+�d�`gb�3�*��qc/9���	��޿��|�FE��j9�>ز�[ޚ�G��� ��������������W��a�Dۻ�u)p��+:5i����V��v� �d���P�8N�a�� C�� �Sz��:��<�99����x�N�'�����	X����� Ѭ����m�+�,�),۱�W��2Q1���4�:t*RZ����$��}��n۞������o޽j�����in4�c��d��!Y8�
��qyQ��N"����h�P\Fr�0i�`�R߸>�$_�v2�_~���ф22��̯#�1W�����#r �9I�f��h��2�ז���CN\4mœ$� ���ը�W�A�#8X&I����y[����8u��-����W!��c4f��q�����t3�kWa�?��=��>:���
Z�>������ �.G�[�/�����3?�#?�ǚ^''��L�_'?�{����N���'ͩ?ee�-	���@������n�n��-R��Z���R������V_ B��W||<Ɠ�����i�.._ɉ�m�C#���0�z��U�Q����/Ͱ��)��`��UY�I ���'�L��L1�DW�����}HH��$$ƶ�%Fc�1I$$z����ʋZRt% ���S��i6�h��U����JVd���7ysWw��\�G7��7|�	�8|n�U����f�<L���F'����r����Sz�v��],Xڦ�z�GL�΍l��<j�e"#�׬��x�jC�}�J0�R���X�hY��L��m�����Ĵ�$ؿ�M�    $mg�D"���ȓ�g���;v��I<E��g:���1���h6�����@�(�SIaD���p�����i��1��z�)�ϱ���פT$P/2ՠi����]A���7 ��)��6�Ȟ<�%��]J(��X���/UG$Z�$JGL�xw)�IJ��K������&`�K�Y1���L������`[�5`�M{�*��(t�b�@�wt��+����c�P��U1̾��!��
�x���E�����i/ �a�x��,L"7����7���FxG׵W"'�k\cڛ��Qu�D`��U�Шt0�:o��$��p��8�K��m5�
��.�h�W���l��:,'9�`��p��n��CpXz�N��Ja��3S�8Ck!�o���;s���]#�:��p�,/��Æ_��Mb�7�b�P�2�jZ7�!tfqA4,��$��n��������	��������u�ޕf��[n{�;F=�a�==�F �c�բ���Z_��a+��tf։��%���.\c��	����V���ZS7?�۵Sv�T�C�۵-L�c���ﵷN�suF}�@�~Uw�H��*�^��V�H���п�T��=h	Py��t�������C�I��O�����r�S�?��২�-�e};�@��;},W㱠�q�x.t��L�Ik��qc.���.��@��Ev����ĝ�͔o�;K�!��D�8 =�<��]��������wn���T�6���}�Z�C�a��M�7`����!�b�)Ӳ�i�L^�?Q??�C1�LwM�U6/�.�v��~�r�d�\��XF|i�oj�3�돞t��,���
�h���g^�h�m[7֫e�/��0$��n�X��<�	�Nc�i��U��.����[��"�d'd�Ʌ=J�J�}j�������3���o�_�$�Y����ih��OEJ��] �r��/D���bc8�v��_
R�bBӔ�)̥�d.��Z�Ɖ؎��d�tƖ�m��(���9�Q�w����5���X��F�W����.n�P����g���6$��m�72�}�.�0��gUc*^�2������w�T����0���Q� �0D z�ȋI?yYo��2c�ʡ���(��������d���[a*��gNdǮ�M<'H4�d��z�V� ��$I!�gw���"��U#��d_8��*����M��p��rs(u����R^��z��Z_׸g�w/�Y���%85zǓ��`��!|�c�*}(!���Cf�7�  �x����N��6pAz�BB�,�;!�19e��������T>�����I��� ���ćҸd�'lX
�+���ӵy-���+�N��E±��Պ��9�{2�����ı�������6o.�;�������Y��P��O]�����s�5 �WvA�_<�>�#��xv�����)[�P�M��O��)���緛��E�����zuy>�R ���-L�қ�ݚ��4�b����a<
�$�dZ�+��`$���:I�b����{p����](�ȏ�Q�_'�P̸���.~������Ŕ]�#k� ������v��.������}�"b��.��ڧ��;L�8�:I��p�/0�wX�����縓$�{r�7?<��7:�I��x�}�Y�_c;u�d<}��¯w�pA��B��4�X�-3tjK�4}���d�%�G ��j,�P���2�U`�`���|���xi�p�K8��"��L���砓J8�Қ)
�y��J��:m`�0ŊK<ݴ�%�#����xX��Q��뚰�([��y�ؽK����IoňQ���n'���Z)�-t^��e��(\'��w���"�(��)~ΡX�P?���U�b��}�Ƙ�E�7��2H=u@4�{��W��a��`�	,�b�͗'�Ø^}r�y�Kп� ����E��l��<��4�Fl�I�F���ék �&�!d�V��w"��X�E�(���Ǽl'?[K���Ͷ��oKj�@�_�1a��&<РZ�g��t�R([@����81��xo	助�" \�m�`��)��� �lā7��3H�:`y����!�Ȟ��٣P`��0.�Z$:4@�"���D������s��<��5�*��S��	P����	wx���i�ؙDA24�q�NG�e3�����)qK���*h�N/�ˢ}�g��瘭o��Ph�VvE���K����-w�T��uw��u������$Y"�bM����x �0��I����|k�FG0obp����CMG�$2v@e!��YQ���x([��Ry�hl�w�$Zj0���a��K��1�0�� ��N���ԉ���]�$�:���+,��?H�^W�����z6صQ
T�H�f��9�nl�-mL�h(i̼VV>�m�Wd��]+dE!(���~0EE�bn�2i�3oohԒ�BL��qX�E������t�&}���x�(Ɣ=��Юw�(uE+�[uyO�h-)a��愼>3�PUm�oPl|���޵%�g��C�(�B��=ņ�b�����!Ϸ|�/'�p�c�;A���`�_�puDz�#5a6�rٽ��cm!n0�#��-��9ﲢD/S����Y&8Zu9Y>L-�[3���W��	�21�SLLl1^RW�3ۺȠ%�E��F�PB�a<�ߪ;d�)!JM�[��H�4��tT���<̳/�G58	6��3/��`�>�7�X�-AUwI@����):�[SO*S���.2U�՚����^�y��ߵWYU�G@/�*�	,H�p�4�t��z�%Ed��aQ�(�98��!�~����d4��(��R��B�U�� �,�|���(���������[l�鹌�*���\~(�HlUߖ�+���#�i�Ŗ2���/{ǫ���⪐���-���M:k{��	�ٗ	��jy*_�%����2.)�����NDp�9��],J��JQ�0j	seq��E�m�[tZ24�ݪ����7;���� nև�Z���6�0n�ʦ/�9���GX�$N�L��Č�8Jv�Î�vԏ��~������~ǣ4�$�P��S���/����1w?���N�����S����X�ȟ����8��$��d����aW��Ǌ��
ק�]I@�Zd�0�^[��5�?���;������W�h1��4�����6+V���8DM��^���ٟ,�u.�bp��t��[�jq"�Z�Ƽ�2Э�)�������TM���A�������Ӽ:��k`�i��.�9�:{���8�j�huѸ7o!��d�ٲ���+dJp�P� �PR{c=E{��L2��R�F���#�</�r��\�)�;�%(D�aQ����EF�j�T�P��(s o���z�`��]-.V%��a,�������qM�h��L��SK5\�k8}n1����OT��J�7nMI��<��7� 6����`q���	�<�v�8��$�N8�By�0i8�=s��p�_��;�5%�J�6zޗ]���
L�1h�K��9�Њ�Y���:��w7���[�Qu)�D�;�zĔ�*+�����:���\'�@��C|�!��_���ר�B��Hj]�;��	��]8g?k�3�3p��]��]�M(YnY�f� }��Ié>11�>��x��\�X�y��)D�?IB�r�,yG8��.U��v��r�We��䂼�b+T��@���	�eC#�q����1�ʟ�7Q? ����dw 	]+�I�Q�ٔ�_TF��Z���u7z#үS�N$�_�9j����7��Z4�J:������̊M�L���h�*�����~&H�D�Fq$���o��M�]]uY7gV��z����O���K��'�ù�����u�(�g���m�n^pf�ٕ���%׋��-sn�qn��԰dCxt�kqJI�h��������m8����(-p�G��ߟ�t�j��Z�~�~8E"���Y��� ��(�̔�    !�8�@pWC���L��� �Oe�)4��\ K���N|>��Q#w���}�����
}�	���O`�2�k��)�l&S��Ah9	-*��Q&+�����\��9�4�ޯ�I��L�SY
H}�i��:-o�[Q�+.��/����ݷ�O��(Ю(��Ey���=79̢�W| �=7���F�l+8��p�+S$���SX(2�[j��'j��T��(C���v�q�5{t��-����������H�~��C"�B6��(����^�.�U�-F���D�|��g$ �8�4�F|ٛ��rV��������'0�K�Đ�	��E��'��q5��Ŀ�)����݉�6���F���A�u�C��O�z�Զ�gz��4�ؒ/* �J�?/�q2��=�z����:(�%ː��-��x�T���o���)��$p�bI�LR�f�\>%� �����g;wzd�R"H��ߥA"������#��M�ma���N}\�U��N8����,��P��X_ ��B���ZF�bEVh���k<��-�(39kѻ�c)�	'�$y(#r�ev�*��J�ٯD��0C���hVv���Bt� �횣0��*'�J���͵�`�pN��-�3ݜ��z���կ�Z�t��t�-����c\�Fx��4�9��~�R��ҜB�28���Rx��p����'GG+��@���85��cF�}�j��7I�8]�$�`���C��!��y��D��:�?*24H*�=������I������>� ��m���ѤE�]�	�	
E���܇8�'��|�N�d�+|H"΂C���D����}�?Y�D����f�}�l�|��X���Tg_��	E��$߂H�\���p�'=���
g1��8��u�<���08H�Ӯ�qЏ��irM^S5�˶�����<�N=/H'I49P�t���q��[*�W$#�s�W�D�Y��11�)��CtD�s�i���߆�K���N��{L^�e�xYW"E&�1M�U����N'>�S;��(r�H48�bw,�#D���!s�jӱ!�uY�������T�miD�ȳ��8J� �[V�OG&|��f�g~d�`qx��&GG,����\���MU�t�v���������R*�֜���,�h��Ok2�^��ĸ[���J(��ȫe�Lȿz����7�r���{��;b;����b��w�.ʾ!&�|�C��Jd�{�oL��ɛ=�U"C�	0.�:�?��|�q��O�i>(V��k=�Z���%;���)�&�t��%�.��S{,��Qލ�뵄*{;�$�N�1|��}&IB���I;g�3�C�V{˵�&IL;�בFS����t��tI�qq�{���ܶ��`۠��{Y���Ё�"�Z�-!0Tؤ��un�7ye�J�7��T�{^㏟㏏�$M3#D�:��|�����X��.NϏ/d�iN9��՞�~�|��P�e��i���I�&�;r�D3ż�HWC�F�̃癋�LąQe�u(lFR��C���_AV@�R�?�1})I�0���$�Ȋ�go�v5yU:I��A��(��暋?pgelIV��";Ǜ>�{�K�����|�}I^z/�qV9����7\�D��a2���U�����`Wc���-���Q��SBk��cr�j����6������W�t�ǺB��U�_a��ܑ��I4�f\��]C�Kȧ$�3=;�7:�-��T����A��4��IM<�8:8��y����B5u#]��N'E����RFJ9֚���E֪���+�d3A@����d��F��w���:��kw]��k�D�g-N��O���JF7�<�3c��CL��8[]�Q�0֭, �Z�	c�ND� ��`�篅�z�[�^'���a�ģ�� w@�'w�\����kh'����~d_PX	*CZ!��RE�h�*��|��[�@��6����ϼ��cǍ'I�
���`/��b?ȓ�гX���Z��R~Hx�׫6�����XBQC���N4������'����Ѯ�I�8J����)�E�Nr���>)hI���KeC$f��������$�Ĉ���)�5�)�#�w.'���M_0�}:��Gx�Ĉ�Ap�t��B���r��|n��<`��ή�f�\���ݢ�}�5w�ù����1������9f�m��\���-�E�(J2����;B�1������|KѾ�A1�V�B\��k���%0��u.�2o��K���7�����\�C�.w�!�_�^�hZQ�O5�����Z�| �fn�Þ�����<�}��ZP��2:<���(�G�3�V%��Νy�څ9lے!d��Ţn���4���<\�(�;��Ǩ.ϑ��'��	�H<l|:�_S������e�`����`ng��邁�vņ�:��/v%b���m�(R~yFY�˚ �2L�}}���6y���4�mX���� �Z'��W"C^߈�">����1��C�Z��9g�`;���҈����'˚ۗ*~.���j<����_adͺB��!�����]{�hy.2�E8C7]'�"�:�������+!���h�J��dl�<�,8wPV+���������=&��zx�H��$�X�F{zX������Zb9��W���0������1�5曰 �J֫Z��}@T��J|����PXT��T����o�A"�#�Z����!�8�μ�.��Ԃ���$eS/�//��pLGm��/dǚ~ƨ����촆�g�._U�Z!���]���X�kG��>����v���X��$Z8r��O-�r�����<@k�w�0�b$b0�3�����fpl�I�#5����OV#�xݖ:�DD���q�	c颬�HTdr6!���q��n$�M �9��cϖ||���C'�j��5�0�7v�I�<�4�� e��Ճd�u5rUt��K���Ъ�.�ZF�آ~a�ҿ�ϣ�/��Hq�{L�rN7J�}��h������A=�GK&�H�R�o�8���Aح!z#�(�
U��Ν��{M;t�0
���A�i�0miwc����X���^�y'b[ޙ[��ُ�2����w��V|�ent<�")�Z�U��RP�o�i�ˋ	�=�Q��A�9�o�&�D,O��"-��c�z�lΞ�liB�O�� fMK�(y�O�	�l���A>��=ְ.������nk��t۠ur�^Ӡ�θV������zӫDJ�2��έ/a��b*
l�?~���B�W9�*���K��_v腃VTC-�iz�.�TAV�:���������EW愧�t��+C����M&�mp����"�[��|�.C���Lb;.p�5Hj2�`�4K�E\5�����┣�K(�F٭l�8���H1?���#�|'��G-�"���~����!+˚\����_`8����>� �8�G���8���2hĵQ��P�8��H*��(!F�;���lt�E�}qwt�'�c3�E�L��m0���V&�5�z�AX��\�x��� �E�D��������"Ǫf0`��-�?�MS�����j@Xɺ^��8� �����Ê�����fo����ɹ�>�ȧ2HĈ �!eT�Jy����0�}��%�i����J�����)�2J#g�,h�h:!Lǌ���A�?ee�����d�t�5�"��x��%�B8&�L%)/*r��"�F4�j��~�U�Ǿ�""H��Gp�n�^�0��i�����i�w+$�>>O_{���6��Ȍ'����o�C4�O���l�h�0X/�����j��P�ҭn���ؚt$^�U�=|e�-��2G[G���8ESJ�K��m���������C}[�LT��+��D�4��y;6����Z��n��=N�B��zH�����9l���2��b�d��)ʾ(�FK4��O1�&_e|�B�*[,vM����ʽ�n�NƉ�p�Ch�h�L�4&�U�v`P�rt���,x�Y��[q|�n`یv�����l�͝ĞC�0�;��-��A{��N��Oz�H�-��]��w��ZZ�������Ǘ,c|�zA(@_��    ���<Q#vG��C-m�h%ҙ���Y��>It��}�C���H��ldn�Z����4�]����о@%B-7{3���܍�$N�t��#�����8v�Q�� !'"0�ܻ�<��:L�^x��`Vn�Xuz�R�G�f��D�%δ�Bآ#�Nw�(@�dܱd�3H4#���C�� 1 �!�{U��j��Xt��D�IEAQ˅%J��q�Y��±3ʬ6H40����,�?���"b(s�y�����l=x�q���$�h�:��	:�S՞��6	ǇĈN8ʃ4H�|8\�3�᧧�`�eMc|���Y�ޡCA�e��z3�mה`k�:x|�B)�����b��#���<��VW�.~�I#qAڭ��pw�0:�*[���O;��m���2aT��]��E����6Hr�T��g�F�C?�`�+,�*{<���$R�ЁT;s|��$ ���Pg����6lZ��z���s���%=�Y~�wńd������ϿW��5പ���;r9�9v�(*1p�z�u	���֫�Ar��3�kP��kdP�oDz�vmv�w�V���J-���"X�1�P�i&���yG��xx���_��[����-ȩ2^,�wm/p�h��t�\��MWj��-�S�ƥ@��\^�~�c%��5_��'y�U��l�R.M��#��e&w�����x�GX�N�E=%?��z����z`,[/�����b�w]`���я��˷�{>�ú���W���~�x�K��yߊIk����{P�_z1u�댓����DK���:/�޾u��a\�`c
��gMC�3�U=����o�O��OV�Rl�Ss��&����.�ĩ;�H����Y)�`����N�mG�ؗXٹ�rT���Nv��4������ �%��Q�4��q�2q��i��E�;F��˳��|���'(rb��� ����VB�ѽ�n���&(�p.}� E���ʌbX��r.?-8m��o�.���AI��Z&Z�0�Z�(��H$����J��`�hpj)iϕ�� ��|����1.y�3�h��42�z=�Y��.���UTo�H�5�ɪ�T�<�zQ�O<��<V_�V������ ]�5p�(</�$�c`��r�(���J袥����K;����*C���/�g����{za�������(�|0��j���G犧�8X��8�<�'�JU�؇�$��
޹jL�ĵ�nd�P)��o[����}�z'�gPbVf\�;� ��>�Q��o��֟߼Vbd=�������c?�5L�!kF���u���۵(��~7��!.;�T��W7ESPHΚ���aˬ�`���
W��#G �#^���7�O�������罴��ʘ��Q�PdM�H8p�9a8E"���5y^��Q%�����VuVʤO�`)�.�%�2�2��ӄ�_*ꅏy	�����vW��;�H�8N���H0tM�|`jy��{4������"k�M�M�D8N���7��*[ҝ}�-�rtvE��T����&���)�~�~����A�������d �RDiRg7�����]�v�������vy��Q̹��p^��8i:��-D�&�Jx�ۧ�/�����'���xxG$����$r�A��w�*�1Q����Z�F�#�X�(z��%Տ]wxw�Sh`��s�9�.�x�$;�:I�.�J�z!���%�Fg��4�PC�A�F`���{�!� vƥI�� ��M��'�wV}����f�(!��S������M��G�(�� �D@!x�C��z<��w�!c;pR����w�l��a\��ʃ%�4��B�W���B���$���^0<���y�[�<c�|(�B�<��`�-����/��{��A4���I������� -bC	"���B�)�X��f H�{�Vl����	�r\�!�2�R_q�-���q���W^���1�M��Y��^
f@:E"6�a�ݥ��!5ϵ7�I����3`Rٷ?�W�=���q�y􁁦y�����VdR-54`#��㸗ʋ1Q�w�(��G�c1 �s�lU����ge�g�=]Iܭ��)v��S�xq2H�������f�����q���{�ԀFy���gf7�o�={eF�F����X7dH� �P���"Np��{G�ɏ����I�+8��@��<�����|��a�ހ�BO�����S`ǡ�eK'�Г��
��D���=$ǥ����_�%�GA�В�E ]�cT�������^H?^0)���
������afL�R�����䂱�F��KC�,�+k)�da��������~�l������$�&�F�D��;�wٯ�ѐH�`�<d������Ӳ��vR6�u)#LfT_��s�T�np�p��#Bvx	�Č��N�C�I�1����S=A�B|*�]��s�rn�M��/�S��pʃ�����n�m#I�z��ّt��"����,ɶfTR�Jn7 �*�El�T�|�wؽ�>g�v�O��ED& 	��m�ۭ�3;V%d���}F7������H��*�O��U�\����E���X`[]3m���|��>p'(O�[|_�- ���"��6J޽�F?��_ʙgA�/���<��g�K>�x�_`c�_ �{K�g�X��p���m͠�a	r.s��r�|
'	�� $āl�a%{^YK5։OǤ��uqӫ�T&�h8����>Cф΂(�M��M���Oͮ�g������>�d+78�M4���xk�{�������f���i�EL�"l�>Q�%g��R�m�1Ģ$�5:����`�}�7i�F�L�`�ѻ,-%�e&��=pUa<��a����!^�c�4a�1�q*�S����8�^q�
ЁȺ�M-�t��D����R[�=0e�m�ȗE1?�ھ���c?��!^-y�Q�9sƽ3�e�������d�
9(x#w]�'� Ъ�mAv�����>�H߲Z�?Hr��Vz�?��:?A���a`����Xs T�U�G�'��a��9��cX_��ҍ`^��TZS�]�}�܎i�w�p��2? ̙ߔ�,�C���K\��p���5������%��HH����b��վ��I�$6�q�'2���mWd��%:B1>܁���f��Y��o#����e��g�9�r4g���Qų��4VMz{G��ub)�1�ႏt��p�u�fĺJD�X2?j+��n~����_�g���W�yx��$�l�n�P��R�$��ȍ!PB�7�M����M�
8���8�a{ ���s���R�m��O�ңܙ��xN��;�ꁓ�|�R�`����bc�fJ�7M�Xt��f)<[�me�:�VkZ[B<�!9��«�/�N��X*�5��^����.�����{���F�(�,����!�al�T���B:���-Pg2w+��5�2̫�ik0�L�«�uR�F��U�d�B'����jo�$fE����i08��	�2&���OV��5��	��n���P:L�8|kDc+����7�xؾ�6�/����qw�Hc�_�(������U�9�ޣ@!S��@J[HB4�-r:����>~5�5�6�#$��1/b�Y*��E1��$�;l�ݻY&�ghL�-��d��~�'��)�8�N1nc�eHg�y��|��β}*�+IŹ�!�84��`J��Wn�h>��>�>�l~HSwV��*�<����ҷ{��������d�֖;C11��t��,$KWjd�/ &C�_�V���e
�W�#�:�fݙf�"bY>DZ	��F�Oۮj��&$��)��>��g�%�@����KYEc��	�MwS��,�<Hr��e���R�"�|��`�!s툖B�y�:�����@�-�F�)�"p*ɇ���8ew̥��#k~�l	�}%��Ƒ�My�;�)`���FNFe�k��a����6�j�v8���}+q���0�;Ŝ�!~/�$[Ҍ_�����	���^L�)��o�f�_���l�Y2<ma
pL
���u�b��>35O�}s�x    Ic��F琥����H�׿�~�;"�q��NƬ1���9�8�����{�\?��`��tc��FǪ%.��ZrF����4� ���6K��/.�x<�C�D�C,4rL-�/��'�a�$8��h���!^I�(l���"��#+
��A0��I��o��\�ڪ����vpO���lN4��h2��An!���=�r���Ǳ߂<j��B���B�:R;$�Æ{��^�L�C�o����~���Ah �q�u�XhdN��Z�[N	��n�#�t�n[���?��f��7�&w���46��3�s?���YN̘@4�����rHQE�S��T�NZ�2�rыB�~,ԫ�v�ղ�} O�)f�E�Ymi��8��+�8��?���%bp˚���nv��&�*+"���+l�{�j�9�xA�g$�d�LZ��!���̀����K%�CQm���-w��׫�/BK3~��oJ�!^�B*�F��K�qP	��m�x�n�����Ʌ DHÐ̛q��Ga�ڛ;'���8_WY)%+Z>�������%?[7��x����~�G�<��~#(?�jd*��6�\�?u���/=���ڂs��AdPjdu��-���\+,�X%
Z3Z�S����!0�I�K>�ktJ�OB�L�T\[�i�[�K�0E���,���,�  ��.��|m��&����J�z{�7�{�@nFަșf�� �5W��Zp�C�է�ǧ�zK�����W�7	�����+=���r�/�"R�o_p%<����8c�-�,�IM�nnT�xqzqqq���?����mw~���/F�N����=���x0�C?j[h�!���Q��[�ek^l����mΙ�j[�f�1�Y-?�8�d텽k��P��Iz�"��)��ϒ/*�%�������`8����(����K��{|��E		�-�x�$I�D7��zi ����[��#Q|Ȳ��v���E�L�׆"����<0���0a��l�H��ǠpmyO����G����᠓@t�8���(��ݫ������X�Ǽ��l��ah�g�kM
p`�\��-��k�m�=��4P[l�����zS��KD�8��C,1r3b7N�%�j� ?ns���l��x&�eׁdW���Z;� ٺHh�5�h>w�N�rV"?��Pq��h�N��]{�_�_j�����.�<�!���-2���H�GsV���L�����X�dj���D���xB�a;��)�cZo�ۓ���^���/��ځ�[I�������+Hj|MgzVJ�x������ X�q8�t*C���I��������r�Á��N�Cc�W�J&�����O���������N���"4F�@�*�w��F�4	�E�֛���� !tJ �!ڄ�g��A������!��kvd�cReA�C3S<��N������_EKO�3�!Bq�bTh������Z���'#5 �au��q�Hr���oUn��ď;�lw��F^�8��α��%�uL�FGW;T���J~Z����	*���L�o��P�?_hA2 ag�'�\�А���Mɭ�ʶʖ�&"yП~�[����<�B�>��qu���G�IOZJaL�*GP�s��@��ŵ��k�	0xK4qK�����l��y!(��^*���7B{�<[k�ǘ6_�����t���cH���ݿ��U��9��l��FhL8�{��	Bܕk��t�ڧ}����|��ו���$	��R��?����ߣY���c8�8���s�C��ɜ�\�糲X߭� %�NU��<�B��7ϯ�3t�J̇�K@��*���N��	���Y�!��a�:)+w�� ���� �0�{�O�"d����b�Y���H�V�w���.Y����(��&++�[��V�(t�U�#�d��fe�Vx~t������6�-��/�U�Na��:w�\�3�sg諒��̐���b�x{��r�~3E�2m�'N����g�����-���,ЉN�D�t���w6y�pY@l�v�5�x�,e)-Z��.�>؁��8}C�Wcګ��K��7�1�a2��S��!�1?���ۙ��R��Jl����lɲ�R%(@�w�m	*:%�F��������N��+ n��>�|>7�������kU���G��u:C�L2��|MaI#M��h����$��`�G����+�+1��&B�R+8�[b�"�/��t�g�8)��>d� O�Q4��C�t<�I7�Ӯ��#	��:��I�7�K2�y����!�A�D�dܶ7C<π�y�����F��5DmnV_sl�{"s���(kϗ=�o�����l������;��3��$�]�NZ����Ǟ�h�O嫷����s�S��[�)������ފ|���A��3�Qdi|9�&��z��%�bM#>�oA�P�ҕ���q#n�����5�4����DJ�'�G,�V�	��ۂ DI����es#�Nw˭�$�F�7!�	#ڐ$���#,ېd{`�6Ŷ(gv�Uw�i�T�Pt���_!�߂L��@*���`2��=��-8������}�<à-���t��-7Bu��F�@Cc���X�.ut��%�Q�B��.�'��G�Բ-6��T�k)�1�	�� ���a.&5&��X��D}A�`���awb���1�5C��;z��x�u�|���bu��G�0x��������[5|��M�Q�M:s�nr0�kL7�Tqa��\3�)��)z��F�u�S聙!�g���lcz��(j#M��X���r�����)���[:���o Ɣn��U^zW�,���ާ�|E��%]�s��t���MY����nʋ��IU���*N ���~�/�����o�Kk��5xNb�q@�}f�Nl
2�v���ǿ�������ҋ���7�q!5����0�������M�>=/�)��7m��{�)�ʿt�=9��w�2]�ȏ��#�� U�����mv�/�!~�dh�(@^~�@��O����`38�LH�f��s^�O&q�5lL���?\�C9��c@$� -����]L�D�A2	����!��y�b�ز����Q��saY�/HZ�+$�#����|���wt�X���-��^�۔�z�����R\�A\�PJ���@5�Q��e�!��㰣 C,�	�²�Z
r�o8|����kN�s��%:��3�»���,҂/�y�*��7���c�|SC"�0�/�u.]&}%�V�Q��5�zR��W�P}D��`8��7� ��!�{�_F��!�YaqЉ�4�� �C� �g%�U���X3�ґ&����R�Y�9! /�.]�ƃ�{+O�*qK��R�hp�J�(�*��|D�F��u�S�q��ԓRk����I�Q��L�`{�[p6�ɋ�N��1�%KQ������h���6#_kȾ7c�?W��"]�7\q�T���u��m�͸f��Ǉ�6�h���z�g�l���g{)AOӢxx��?c�Q2���(���O����6���͘{ܡ��^����@��8������{5b*zO8F���[�0H�lp3�8�z���ӟ�9���?��Bw��CN�o�^4V��S�#Y��
��6���Ɓߪ�m�l��,Y�N�y�-,�E*Y�P�P/_�ĴG�0N��4aS�i0ܴ�5�p½1m����!:������!����ϝM�B�q@���_�o ����B"׺є�=�77l]�^�^��͍�12����B#b��m�o�jn��p�,	��z)º��;	��}nk"�[5}�֡�T�Qw�C,ʄDi�ë�E�dn�t���r�y�H�ao������wW��lt"[í;��UIМ�� 	�I���/�����������@�BQ��ej�JD�����1��M*+�f9�ЫT�^[�����+Y��4�����&�vX2-����@Y���OqC�)%��q��'�op�rFפuJM�"���Yh>�
��㊲�n!�%��p�6�X��Y���    hQH&k��iy�A��5�N(��:�D���O��̑��nO������'8��d8
;N�;��$d��ic��c*���mX��N�����+5NԒs�>P]�(��o�[�9E��5��ΝW��ȫ�$�(�dR �fD�I	>�9ّ���ˬ�-��}�m��8�?�wj)�Q;��N3�I|��[��"��m��Sh��YX�掻ဣ�^�ٔQ
���ޗ���l��a�;Cs�R�ߠ�I�FɏaP�\��l]�4_�(�I���!4�@ >������-�/V~�[�H�p��O����ڑL"<��~ި��c�eR��7eׄ;h�b���/0NP��a�w�$w�?>2�-�����O~L���r�����nR.�n�!G	�y*���_��p�PW�M�o��^���m<1.PV�хF�w5�&H0S|��ѪP��毻C��yc�zϛ�&O������`~
L���H����C���^޻1�J�!r0rA&m�1�/�|,ˑxYD�`_�&�,P��r,�$�?��i��o��k�� ؀H�e�T��nY�$dӓ�U
�%�3I��=uQ�)��"뀿�9%X�e��7ֹ-��b��z@�϶{^��\#���k�����M�I�T�):���~�듧�k|f�6����Y8ހ?jՍ!�p�����DQ^I���}��Ǐ���^��IL�+tk�Z�0I:)�T��,��&>��re��,�!^9:a�R�|ՏeO̙�͟
I�G���{�uI�t���LS,�
A��M)l���bοԅ/l��3����4c�ǲ�_�G����S�`�	�؏:���|�p_�;�F����{�Tn�I�E]��3�ʐ�ǒp�@!GzY�껟�k����ZH�E�=���O;�DBF�=˻=	�u�B�����{��̾i���,C`����Jc�k;WA��#���q�.v[!"y����P����eu����=�nö?O�%�Ȼ?���E�!���ޙ1���U�IZ�_���A�����k.c����۵����n�Y��ݱ0;�n
;*�oR�[��g�����?���3���~M��������(N:)����>�z�gA�H�ںv�s��=�]J/@���awW�0<�a��]����п?dr�� F�+�m��O/�����nobr�^��d���k�j��s,s�Ц0���v�y���\qcj*����pl 70u�8j5h��x�dpX���r7;����ǅ����W�EƵ��Qaï%��.�����R��M��T��"�+%��iU�Lo� aJ_R��,:���<��:U�F�&B��N8�=�	������^�`�]�o�%G:/�N�j�Y�ȴZ�Gh%n��<��5��_v�v>B�Ħw��qԙ�;ē'�5�y݉��(�ؚ�[p륚U��.��H��fMr&A���0�ɐfm��Wu�}���O Kx�w�x4�&	V�xܰ���s0�k���iFߜ�{�U�C�`܎C���.ZC�(�#�0YW��
�2�>����&���l(e�|��j�����F��8��ܵ�iіO��r�9��kN#tbWs�AQli17�zѶ�K�ŗE�����Н�O?��y��?oq�g[R��e�e? � q��8p������
�"n��������;��7_��T�h�S�M�v�	���2����p��L�Ze�V�&�;F�7K¬��q�7�[%zY��s.7�z�Ǖw�(��Fl�X�E�N�ϟ���q<�嬂؀}PwUT��Dn�JI�d��A\��W���P����ķ&�z@Z���B)���xBfR�K��ͣ�v{�����H����ň�����F㤭���-�y-�s+������<��>i�lk6�gY,w���ދ�WY�����8i�ZC��hHz�r��� RK�k�p�ȵ�eB�l�f�n�&�ٳ�+�n�v�-��ج㵱�R�~b1�Z�5��W�p�P�ZC�D��q�d4U�Q�h�7#WnW��t��������Wm�I�������y[l�ٌ��6\���X���|��|J{cމ|���K�Cݿ����Q[����D]�]e��gFT���-k���MV����U���$�^��v��j)��s�%7rIFq��C�|��;��+�V�K��.���O���="Qƣ
��'r�}<��v�Ts�w)�Ѿ`����4�}q"��	Ǵ
���x��u
�*v%�P�"�إE�^2d������.Z	��!�xt�[���>��(�¾!^<��с  ��r�6�7�EQT���"i��T��L�Ϛ���4��q�6-C<yR�����u������v*�$�1=T��jZ�����p��K9���N�ӄX�wK�I�Z*9b�_���𝴽w�,�i*�:-��QQpbSDr�p6(�
x��S��4+��~��)��ɽ�|�4�`$�`�vpC�b�ӱ�i�;u3����U8?�(z�������MiN���r#f���k���Yܑ��|pϝlv3����ݺ}��2Ϯ��w��2j��}����ŀ���_����ۘkݠ<�%>�Z�Պ
�\�嚑��h9��E6{�O ��0�'��^h��D�|r��ZR�Y�NM�έ[�"_��VR�Sr���@9��S��[5l96�n�TLZtC��J�i�d��߿?�V\4�b���@�jYk�橊�W]�O��ڮȮA]�?/�,v�H$+ZZ��q�X��{���+n0�
�F�~���zCk�´�nq��'g�P� �@n�55�{���ۆ��?H�����mH�Er̗qt�6wȭ�;�64	~]��� ����-����Tu��Mp��{_su���7tףvW_h(�Q�0�H=#,2=��K���N�X{0�?S.GpXDN$�F:f��n[��lI�v�OF�xSc�e�����C��Ӓ��^!�;�h��?_�=2����z�@<�a�3������U��Ц��P ��f��n�俚x棞�Z#8�lW�y��	8���O��S�b�#�k�H~�Dܰ;��>,a�(	�vajc��Ǥ�������>6�5c"(9R���AB��H_�FNl�t?�J�P'*��xPZ����FIۗi�I�D�@Մ2��r�1)	�Y�)�c?C����-w��N�8p��������O�F�E��H�*��"�A��>��#(�F���`I�֎����Lw�O�N������%�X�����fƉ��˩5Px����E`�<d)�@������!^�OK�׫�M �-z �l�T��Ĳ5�:C���e��x�4_V�{ԟjj͞�ug��`�����<$C'���
�GJ��+l�c����`�c���9~�Ǩ���f�J�"��m����G�`4���[C<e2���/�#as�g�I����!�69����;���B"Ɇ���ť���R7���X�[Q�$�{��"�>�/��?@�=�=�2Ķ[��@?�H���B�D���A�ӎ����8�A: n���f�8!�věڹ⴮���"[b��W�ӖI�\\�����)2��B���+�K��pU!J�n�W�.-i��I;�����c"s��L��Iw��'��ܕ��b{8��F!�=�LF��;��!�1�_%y�0���1c��w��� ձP�b?ؓq�x�GF���aq�`Б�7b��F��6��� �'aw%�4+�lh�F�G������[�Pe�P
ck�h�6E9��=����~��@ʐ�0		mm�b���݇��=�D,ę��0�l�����,���{b��W�k3����bض����p3'f"E��Y�1�陿�����O=�xr����$��WO���F�D�IGI7�X줤��R��w".��9�fE7PǑ8���.��'�_��O�q+J�ؼ���+�}
��d+��c�.��uV��S]��RP��Cݹ6���Ӭ���!��g8`��jc�?��̵�����o7&q��O�mՁ?�:�w�_�-�1x��a1 �����g�cGk�#򽆝b<wĆ    ���}'���Av���Ys��ZW��v���pf��e�КEm�W��ҹ���g�B�{A_ �B�3�!�݈�|�HG����V���eϥ��;���v@��m� ��u��P�`f�u^~d����
�}F�p���#����J�_����'�Q�]���7Oө�%��䚹#��(~��"�ڴ�.���}��l�&t%���TzuZ�p',�(;zx?�i�&��%���M�|�`B�,)�0�۱��D�Qni��Ḳ؛�H�5J�^���1C,;߂���D �b}ʫu�kLr��Ek�Up��{vn�U����P&�����Ag�E����'&���lʐi���Ҳ�\�ѭ��^ y6��ɰm��#�V�'����~+��&��(
�J�1d��}ݒ(i���������!�5�U4�D�����`���w�W�J�ck�YI
�[dV��F���̙KZ�p�irGx�䤍�,�ywf:Ft�?�~�»&�i��Nƙ�X�K���csx~BNK۷i��#��#n�qm�ak-��Q���;v�wZ�6N���b H.�r��T�8�P,U���TK���o�Rr��<��^��y5K5,qIʩL��Qey��5B_�p8�a�	�5Ă&'rl,@���(��1�mN�??���Pp��ma���ڞA�҂�I���q����o˛�'�>x�*L�?�c5��s����Q�L�N��T-�l�<�#�Ñ��0Am�p8�b��I�.*��5hɪg�5��=ޫk앚��NG;�¬�נ�-�hal��(��.=�ҽ����g�0b4
$a2i�J�!Y���9+:�jwv��ͮ�P2���5�f����Ps� h�ʝ�U��F���Y�Wߨ�[gK7s`�5��&o���6�o�V+$lh��ʪ�Њ;/�ޮ=P�ɤO�S����jv2x(F�� bɞ��)���#�:>{`�G"^3��� h��ړ[pG���Ky��[�"�23pɓ�N�z{�ή�����;�\���|�'�� ��v�:Je~����>�(>D���x�;�[rD[҄<�j�Ʌt�<=�W����Y��\ݬh��0]����N�3 /�'��O���^�K7��F��S�D���>���T:��	H��YQeӦ�N����:�{�����5l��OHF���\����$��v���y:���������j�翐ē��k���}Gz�����ޠ���뾆��<�oyt�w�VJ@@{�U�4g���L7}H�3���<�&��yC��S�;���� �ٕ��BsR���W�����[;�n9jxC�N|�4|���7"�����##�$�d�w��a�!�ܖ�ef׺Ȫ8���b�ƊѾ-&��J�8�R��&��δ����?�\�Bd���A^��!vX.;C?O��[��k��=W�>��MOU�i�p��)�Ե�.�p�L��I���6��6��DҌ H|;K>h:��� ����I��2�9�-x�|�2���H�q�AY�G�V-��-�Dr`�h�� f�
<hHV'P�A��fYs2P�!��XR�Ҩ�4GT\ڱ[sioz��.�lv[��M�(�![���t��w� �ՂN+��4���R�Z�~�Υ`�fW����P+ �}�n8���gx��{�l|�P���Ƌt��AZ?0j����M����b3��jg7�{K�-�{I�K\�H�#��6J�B��DY��>�gޛ�,u#7Q�y��`!}B��μ���!��ź�8ǃ8�&-n��k@�4�	D4�����@jAvT�9S�,@�(W�JfLZ�9�8|�y��@Oo�hvw���ܔg�xm��;�`�t��-�
�m��������d���Z���2ב�}C,ؐ8Z��,��֨�M��ha�O�A�����Z�T�f�x��|h��6X������:�ϭi^�.�0��R:���>�� �rh��/�2�<�2 siC�~��=T�c�=Q��e��Kz��i�KY6r�����.�˦����	gͣ8h����x�LȌ�o�gE��FO�D��L3�p:�.9���W�bzCG��@"n��QЦoi��"�1$bXN�٬��v��x�K�h�J�b<��kUzQWPL�ꂨ=������ ����0Cw��?����N�xz��fQ��H�|q��<e|�d:��`������?�:-�=Q�"�̱|�'_Ց��uU0@J3�LG��g�.�#�bs�C��B�Wi�l�k#��L��[ �Ħ���Y7BSim0�6`���2I��Y�<�'�	r����$L��X�؍�Kt��&B)}���̮1�s�����=L?4�X9/�R��6�]�ؿ�ē)}�;D[�,�����.M�^�4����=��5%���׹�����8�B��;�Ό��z1u:����t�b�h�ē�o��4|�ї=�eO��{�3��x�'�q�o�!���U4��n�����r�1�����ǝ�����j�2�g�ŵ��
g��v޽�̱7ŭG��jz_=�+N���`&c���i��'���k�t	ü�
l17��SU'	��-�Q��4���ᚊ����,ǖ��3L�����CXV4�e��Oy%na�!y��	��53�*��^��:�a� �ꦶ�ڷM�!*iā�?c�WzL����9���V6��0"1>!��mѺ#,���֋:)b�S@/K��*��i� 0ZCڐk�V�n%ۆb*���\��C��l4�q�=�A'���e�A�.�ʸ���KQxf^��Q�����O?��ř�lX;2/�g���`�h�m۱1�o"�7Q'g�3+��>�3L	o5mx�d�
�5���4LoZ~,S���{B�=�K��vz��ۑ�T�o�i����p�>�x%���W�a5�C���(n�&���B����{ڙ�gMP|��+��8KE�K03Uts���M[��n���:�7�ӗ������G)x��D?���e6��D`!����`���HF����Q�mZ�����(<���<SF��hh�>��2�2.�	�j�H�"�Xd9�r����ᗗ�8�A��f�&�*'�~�7Uq���V;�7���� %�M���&t?}u@8�ɴ3E�p!څ�xwξ�Y��o�sI�$)�[�i�m�w�Юn6�@�8D�xlr�Fq��(Tq0��@d��6������;>���x���u�x�8ꍡ�=l4t��aɱ�Ve��8��� ɕ�&�F��	�3�@E�of��>5����lz�мre��X�;��	9��6z2�-W?�������lx5Q�~n�i�R�N=D�G��M��$lW~4���h�[��`���z`�p�A��� i8�Su�9X�8Ej��Q�����vx�5/K����%}�JvF�=�͵<��3�u^�Y��.[��Hz��Q�����lt��w�J�%�vQ��sE`�әl��6`�Z��ڀ&�4�-��Ɣ�����usR'Ih�fJԨ4NS�m�c�����6��fD�?�-
�߭��0Ĥ��_��ݚ�nmt�����wp�uצ���83U�Fq~TW��ZϠ��rչ�`�O	�m��#P�pM�i;����zF��Dԙ��tR5]:ɇ1���G#��c�B,7�);t���*�*����8b�u��P�R5[���"j��4l�0�ٝ���?���-�8��d0��$i�V�!^��(��q
��;��=A��F�A%��������s��5��V�bU�VO;�!�Ï�V�Tv�P������ia��x�h�C��,]n�Jl��s��!�QI;��b���4[H/������������&}�55~��ZNň��U��
{�0�9�A��n�-���5�5��R�z���i�ޕ-N5.m����DM�#�k�Tf.t�.�{PP�����o�~<�(��˙�_K:z��|�"ӭ���.�҉�=��.�5��ؔ�)��˰l/Ly�^�����b�6��\����Ψ_	�O�:�4�!� ���Fa,��:��̧e��+.�Q�2���<q��� �  y?��)���J���j����D�81�S\����"MSN�2�K�y��W)�A��U�-8W�@t�C����\��X���z�~ӽ����?�'I��k���$��hN��g	 ���$�_{/�z�uF��4v"lf%I���aL>���Ъ�}7��~��B"g�;0��}����W���p@r�D:����Q4�����)�2��ǳ�>Y*�x9Cc��|x.�p+v�S�$=v�=�/�~��Vw���^�����U��AyS�zD����Q�w�*e����(o��B�%����Ķ��JZ� Z~C�!��9)����ٵ��L�����R�gjʔ t��~���Џ��ɸuuF8�L�~�R��:�Ho��}�t;d#�����u�"�\�/�����������f���qrMBv�Ԃ&��	7�16��=�l�\��Q����3ۂ{�=k���^�Ζ�2F����[a�%i���E:_��* b((j4f���Dd���ַ���Vc��Wa�j�b'����o`̄=��0h����Md�/��=	��`8L���z�C6�`�������7�M� �e�Li�)����Ē|݇��A�j�~Q��]i*m�F�-zGz,�~�i�Rt4c+� ����<�Q)��$s��q�K�c����k>��z��揢��>�!~���ėė��R�`�ɤ��7�l
b�%$�%$��	Ð�N;~��!᠎�TN�=�2���|	O}��_�Ŋ����j:i ��+����&f�)3Rw�Q5]�u���u^�ב5j�"5c�cN������I�#Sv�.���F�$��xO.�bI���G_��{��1x\��S����>���H��C��������a'\�ٰtӛo��Ǫ�!{�\B>wf�ʾV��.[�ㄼ�p038>��}�ƿ%��#��u���Es<V�,�}��3�WCx�~:ߕ����b����Ft����F-��q�p��d�ď���<ǆ�k�T|����@#T�`<����4��-���vU�m�Z����;	�0�1mRzKd��mW{]�#��Xx�ɢܺi�h�D�[Sq`9��:�V˫�+�^�G+B��Gomq�l��F&/7Dbc.�Œ�|gC�W�!+����U7iU�r��u��k��w
^�A�txZC�N��
��c�"�To�	��C6Q�%0�$�@24��l�ΞSM�q]���eXjt���Wދ�+'��|���"���GAC����X�
��39���iUl���/H̨<w�o
��*��{��u@�9�ǜ��v�}��9��1I $袛\�����L&N������Js��~F�w�f��y�����C�"�B��Ư���]O��{g��'�h1��)��j"ktuF{�<����V�k캉d�����nU3��v���r_Ӷ)L���w3�ez[�Q��������'����" ��F�o�� �ol�˝��tuI�[� �����HT[��v��t�Y.A{���fy9ۭ�M�����C2U�C�LA9P��~���Vǹ�]{+���ebޡ�Y�W�RM��ߧ�9�T���������O�p��j�~!}�c���p2i!�!�B�:�e�qκ�p�d��N�Y�R^ާ��V�EtH�- }${���Ékg���?�ʡr���0&�	i��\Aֺ6>��ʹ�w�X��ie=5IA�۩�G'�pR���n�D�m�p[X���XW)�iq|yO�snCs��%����z安D�����w[�a�_	&^��[	�"�u �A`��+V;Ķ�*4�Vc*30�c�t��B����	z����$��!�X��1��OQ~�[e�gywҙv\�҇eb���>��ը?���j��LK�]'k�<#��]ӛb}��V�ti��O��ѿ���Y=�`�ersBFˇ��l�,]1����]���fQ'VUf���{���I<�t���k�Q��|�O?�����Ź���`����)X<�pI��K�զϼ��ꅩ����PPm��@g|��R,�o��JՀ�������3f��3S[�����'��C%�[�N�Iz���/�W����:,X�ZvၿG�V|j>���p�<[��)`*l�5�離��⿟`���h�S*�3��l��Q��72���Q$D�Lc%�Kp���@&���s�z綼�[�����bk�f.�r7ncn��,e`AcP�T@z p#�kbs=�~�F�"�8�y�\�����M�(��kf������+OZ�3"�ʝ˴;(���Ć�IM��!-TH]v�ٳ�G�Ū�L��/��g߇�E�O�����?C����7[0���8�5ct୸Mv�C��ԁ�1�U������h�Vre����rį�o�q��i�����B������8*0eI���H���� �(s�b�b��"�罚gxL� T��v�E��=�A�,H���b�O�<5���P��/8e¼�C8���,
��bii��I��s��Ն�j�_�/����_����p4�#~�!k�ݧz������b������`����]1���_t���=��MK��N�OzT�YI.ҏ�}k0��05�tzq�M�f�|^�J�~�*�b�Z�z:g��N���T�7 M����:q&���.�Cw���|�`Һ�@mb�����-�c�[��������J�Fy?SѮa�Z�&Ч�q���fY���|N�����,�x���!�:ѣ��)χ�s�M��~��I�5����!��^�s|�/\Icʌ}�Q'p���|y�����@A��n��3?37��b)��5+	���F�rL�:�?t��Zg�p��^��!#����}�?��e+�!��hD_�m	ͪm�Z�����9�'�À�����$��-{���a<�_�G���V�      �   �   x����n�0Eg�+�D=lK��&���[�\��JN�ϯ:�T9� <�%B�}��\L����M��:�|ȣ�ۼM��*�ى�k+�F(�8U��Q��b�����������3�%Śk��xu������,��g��}��X��(Iu���0�QX����rs����X���A�L�F�"
.�х}��w�_u� 7��B��_@�(!��ЂI      �   �  x���MK�@��;��?�23;�՛�W��KA�J��{W4uK�!��Cfw�7d��6���y�5d��Wy/1\R� Yq\I��I�� `s�?�q��ec�1�S8s�1���q���LD^��@�}��u/K�lSL�R������~x^�� �hCARss��>��_��eJ���#�hn�ׇM��e[��\k�	A�������X�A�EE3:�)��
�FVti��]�'DUX4�/W.ȭ	'��h�`#{�F�J}��h�RS�.��;! 9I��K���y��)�l)K+0*��������/;�Hh�	��gui�h�����B@uAD��u"���+S��Lp��I�,2'7�q���h2W6�S7�9�"9�g���iCt���ɬ!>m���3��p�- |�]��      �      x������ � �      �      x������ � �      �   X  x���ٲ�H���)�}9��
�������s�P(�)�`G���љ��O3�D��W����R˄���QY��}��g����O}�A�z4��p���ִ9m Z��֎���h{Wn����N�o��A�9��R_^N��Z.I^�Ɨ�4^Nqt$Vz���v�v�A�+#TW
2e, �E��H�DM̜��R��= ��$rғ��ЉRb��H=/�⑸+�Km(mmBY��f'�$��13{�T��1�FP㣰K��y(5 ��$c��B\#ѐ�6frp}���{PK�z%�)tw6�����c[ɒ���|J�A��&�Y����YZ	�QyK��Ue�3j$Bj�Ƅ$�
%yD�,�y���"�x�NE7�X�� �^,w�mcS�y�����g����+�����c��BCD���&�D�����,Xҋ`A��m{:7�E���i��ãt�pi�c�ϛ���.1l^��C�d�I䑄j$Z�X�w�L�2+���%��Zk��s^cr8��b
OjD��مo����<�S���!y��'�������m����H4d��WHz�/�����2fc.��bP�^t����f�+��4��%�-v�.��Zh�͍��/Eze�#��|
�,�!��h�n�=7'w�u���~]�lg*�S�I���/��`d�Q���S�Y���8͸}�8l�9_���?��1z6ZV�x B��+4~DY� ��g��4�*��=��f��{��"K��G�8*��s��Iu��Qe5����&@��h��W=��-|�����>˃��\!v�����6`�Y���|0b͎��a�_8�{��GQ5�����iD�g��jz�Q�(�&�7���r�
�����v�pԆ�V!���Q�9HZ��CvZzCÏEr��o�u��Vw�GƼJ��e�3���'��E���(q�g��[^����48�#�l_�xg_���K��p4gG9�7����\��7�dF �$�l�DW{�fHɁj�6ڑ���
*1����t�����NӖP,&����.��mDP�	�z]Cu;��hj�����ǡKW��-��Y�¯�m�j9 C�XI��-�#���4��y��     