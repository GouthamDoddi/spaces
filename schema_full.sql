--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5 (Ubuntu 11.5-3.pgdg18.04+1)
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: btree_gin; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gin WITH SCHEMA public;


--
-- Name: EXTENSION btree_gin; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gin IS 'support for indexing common datatypes in GIN';


--
-- Name: btree_gist; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS btree_gist WITH SCHEMA public;


--
-- Name: EXTENSION btree_gist; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION btree_gist IS 'support for indexing common datatypes in GiST';


--
-- Name: citext; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS citext WITH SCHEMA public;


--
-- Name: EXTENSION citext; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION citext IS 'data type for case-insensitive character strings';


--
-- Name: cube; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS cube WITH SCHEMA public;


--
-- Name: EXTENSION cube; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION cube IS 'data type for multidimensional cubes';


--
-- Name: dblink; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dblink WITH SCHEMA public;


--
-- Name: EXTENSION dblink; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dblink IS 'connect to other PostgreSQL databases from within a database';


--
-- Name: dict_int; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_int WITH SCHEMA public;


--
-- Name: EXTENSION dict_int; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_int IS 'text search dictionary template for integers';


--
-- Name: dict_xsyn; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS dict_xsyn WITH SCHEMA public;


--
-- Name: EXTENSION dict_xsyn; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION dict_xsyn IS 'text search dictionary template for extended synonym processing';


--
-- Name: earthdistance; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS earthdistance WITH SCHEMA public;


--
-- Name: EXTENSION earthdistance; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION earthdistance IS 'calculate great-circle distances on the surface of the Earth';


--
-- Name: fuzzystrmatch; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS fuzzystrmatch WITH SCHEMA public;


--
-- Name: EXTENSION fuzzystrmatch; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION fuzzystrmatch IS 'determine similarities and distance between strings';


--
-- Name: hstore; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS hstore WITH SCHEMA public;


--
-- Name: EXTENSION hstore; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION hstore IS 'data type for storing sets of (key, value) pairs';


--
-- Name: intarray; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS intarray WITH SCHEMA public;


--
-- Name: EXTENSION intarray; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION intarray IS 'functions, operators, and index support for 1-D arrays of integers';


--
-- Name: ltree; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS ltree WITH SCHEMA public;


--
-- Name: EXTENSION ltree; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION ltree IS 'data type for hierarchical tree-like structures';


--
-- Name: pg_stat_statements; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_stat_statements WITH SCHEMA public;


--
-- Name: EXTENSION pg_stat_statements; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_stat_statements IS 'track execution statistics of all SQL statements executed';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


--
-- Name: pgrowlocks; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgrowlocks WITH SCHEMA public;


--
-- Name: EXTENSION pgrowlocks; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgrowlocks IS 'show row-level locking information';


--
-- Name: pgstattuple; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgstattuple WITH SCHEMA public;


--
-- Name: EXTENSION pgstattuple; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgstattuple IS 'show tuple-level statistics';


--
-- Name: tablefunc; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS tablefunc WITH SCHEMA public;


--
-- Name: EXTENSION tablefunc; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION tablefunc IS 'functions that manipulate whole tables, including crosstab';


--
-- Name: unaccent; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS unaccent WITH SCHEMA public;


--
-- Name: EXTENSION unaccent; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION unaccent IS 'text search dictionary that removes accents';


--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: xml2; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS xml2 WITH SCHEMA public;


--
-- Name: EXTENSION xml2; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION xml2 IS 'XPath querying and XSLT';


--
-- Name: degree_4_level_enum; Type: TYPE; Schema: public; Owner: lnhtywgf
--

CREATE TYPE public.degree_4_level_enum AS ENUM (
    'high-neg',
    'low-neg',
    'low-pos',
    'high-pos'
);


ALTER TYPE public.degree_4_level_enum OWNER TO lnhtywgf;

--
-- Name: degree_enum; Type: TYPE; Schema: public; Owner: lnhtywgf
--

CREATE TYPE public.degree_enum AS ENUM (
    'low',
    'medium',
    'high'
);


ALTER TYPE public.degree_enum OWNER TO lnhtywgf;

SET default_tablespace = '';

--
-- Name: applicable_sections; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.applicable_sections (
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


ALTER TABLE public.applicable_sections OWNER TO lnhtywgf;

--
-- Name: applicable_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.applicable_sections ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.applicable_sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: attribute_parameters; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.attribute_parameters (
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
    "order" integer,
    test_method integer,
    quality_gates integer[] DEFAULT ARRAY[]::integer[]
);


ALTER TABLE public.attribute_parameters OWNER TO lnhtywgf;

--
-- Name: attribute_parameters_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.attribute_parameters ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.attribute_parameters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: audit_logs; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.audit_logs (
    id integer NOT NULL,
    changes jsonb,
    resource character varying(50),
    resource_id integer,
    extras jsonb,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.audit_logs OWNER TO lnhtywgf;

--
-- Name: audit_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.audit_logs ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.audit_logs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: beneficiaries; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.beneficiaries (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.beneficiaries OWNER TO lnhtywgf;

--
-- Name: beneficiaries_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.beneficiaries ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.beneficiaries_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: beneficiary_profiles; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.beneficiary_profiles (
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


ALTER TABLE public.beneficiary_profiles OWNER TO lnhtywgf;

--
-- Name: beneficiary_profiles_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.beneficiary_profiles ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.beneficiary_profiles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: beneficiary_segments; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.beneficiary_segments (
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


ALTER TABLE public.beneficiary_segments OWNER TO lnhtywgf;

--
-- Name: beneficiary_segments_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.beneficiary_segments ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.beneficiary_segments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: bill_decrees; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.bill_decrees (
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


ALTER TABLE public.bill_decrees OWNER TO lnhtywgf;

--
-- Name: bill_decrees_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.bill_decrees ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.bill_decrees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: cases; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.cases (
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
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    project_id integer
);


ALTER TABLE public.cases OWNER TO lnhtywgf;

--
-- Name: cases_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.cases ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.cases_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: challenges; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.challenges (
    id integer NOT NULL,
    name text,
    name_ar text,
    description text,
    section_id integer,
    project_id integer,
    attribute_id integer,
    record_parameter_id integer,
    entity_id integer,
    type_id integer,
    description_ar text,
    date date,
    extras jsonb DEFAULT '{}'::jsonb,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    actual_type integer
);


ALTER TABLE public.challenges OWNER TO lnhtywgf;

--
-- Name: challenges_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.challenges ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.challenges_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: common_values; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.common_values (
    id integer NOT NULL,
    name character varying(50),
    type character varying(25),
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.common_values OWNER TO lnhtywgf;

--
-- Name: common_values_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.common_values ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.common_values_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: db_challenges; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.db_challenges (
    id integer NOT NULL,
    code text,
    compliance_issues_type_english text,
    compliance_issues_description_english text,
    compliance_issues_type_arabic text,
    compliance_issues_description_arabic text
);


ALTER TABLE public.db_challenges OWNER TO lnhtywgf;

--
-- Name: db_challenges_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.db_challenges ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.db_challenges_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: db_projects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.db_projects (
    id integer NOT NULL,
    name text,
    description text,
    start_date text,
    end_date text,
    entity_id integer,
    current_project_ids integer[],
    current_project_names text[],
    project_type text[],
    qgate1 jsonb DEFAULT '{}'::jsonb,
    qgate2 jsonb DEFAULT '{}'::jsonb,
    qgate3 jsonb DEFAULT '{}'::jsonb,
    qgate4 jsonb DEFAULT '{}'::jsonb,
    qgate5 jsonb DEFAULT '{}'::jsonb,
    total_score double precision,
    score_by_section jsonb DEFAULT '{}'::jsonb,
    total_parameters integer,
    total_completed_parameters integer,
    compliance_issues jsonb DEFAULT '{}'::jsonb,
    compliance_challenges jsonb DEFAULT '{}'::jsonb,
    compliance_by_mandate_level jsonb DEFAULT '{}'::jsonb,
    extras jsonb,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    project_status text,
    description_ar text,
    name_ar text
);


ALTER TABLE public.db_projects OWNER TO lnhtywgf;

--
-- Name: db_projects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.db_projects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.db_projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: entities; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.entities (
    id integer NOT NULL,
    name character varying(80),
    short_name character varying(16),
    type_id integer,
    focal_point_name character varying(60),
    focal_point_email character varying(60),
    focal_point_mobile character varying(30),
    notes text,
    extras json,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    ar_name character varying(255),
    description text,
    description_ar text
);


ALTER TABLE public.entities OWNER TO lnhtywgf;

--
-- Name: entities_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.entities ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.entities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: entity_communications; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.entity_communications (
    id integer NOT NULL,
    name character varying(80),
    notes text,
    extras json,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    entity_id integer,
    type_id integer,
    date date
);


ALTER TABLE public.entity_communications OWNER TO lnhtywgf;

--
-- Name: entity_communications_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.entity_communications ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.entity_communications_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: entity_services; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.entity_services (
    id integer NOT NULL,
    name character varying(80),
    category_id integer,
    type_id integer,
    description text,
    extras json,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    entity_id integer,
    images jsonb,
    service_status integer
);


ALTER TABLE public.entity_services OWNER TO lnhtywgf;

--
-- Name: entity_services_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.entity_services ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.entity_services_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: extras; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.extras (
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


ALTER TABLE public.extras OWNER TO lnhtywgf;

--
-- Name: extras_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.extras ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.extras_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: object_questions; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.object_questions (
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


ALTER TABLE public.object_questions OWNER TO lnhtywgf;

--
-- Name: object_questions_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.object_questions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.object_questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: objects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.objects (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.objects OWNER TO lnhtywgf;

--
-- Name: objects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.objects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.objects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: outcomes; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.outcomes (
    id integer NOT NULL,
    name character varying(50),
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.outcomes OWNER TO lnhtywgf;

--
-- Name: outcomes_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.outcomes ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.outcomes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policies; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policies (
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


ALTER TABLE public.policies OWNER TO lnhtywgf;

--
-- Name: policies_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policies ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_impact_areas; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_impact_areas (
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


ALTER TABLE public.policy_impact_areas OWNER TO lnhtywgf;

--
-- Name: policy_impact_areas_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_impact_areas ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_impact_areas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_objects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_objects (
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


ALTER TABLE public.policy_objects OWNER TO lnhtywgf;

--
-- Name: policy_objects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_objects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_objects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_op_tasks; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_op_tasks (
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


ALTER TABLE public.policy_op_tasks OWNER TO lnhtywgf;

--
-- Name: policy_op_tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_op_tasks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_op_tasks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_outcomes; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_outcomes (
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


ALTER TABLE public.policy_outcomes OWNER TO lnhtywgf;

--
-- Name: policy_outcomes_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_outcomes ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_outcomes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_queues; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_queues (
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


ALTER TABLE public.policy_queues OWNER TO lnhtywgf;

--
-- Name: policy_queues_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_queues ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_queues_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_risks; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_risks (
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


ALTER TABLE public.policy_risks OWNER TO lnhtywgf;

--
-- Name: policy_risks_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_risks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_risks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_sections; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_sections (
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
    "order" integer,
    name_ar text,
    description_ar text
);


ALTER TABLE public.policy_sections OWNER TO lnhtywgf;

--
-- Name: policy_sections_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_sections ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_sections_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_stages; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_stages (
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


ALTER TABLE public.policy_stages OWNER TO lnhtywgf;

--
-- Name: policy_stages_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_stages ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_stages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_subobjects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_subobjects (
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


ALTER TABLE public.policy_subobjects OWNER TO lnhtywgf;

--
-- Name: policy_subobjects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_subobjects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_subobjects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_tickets; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_tickets (
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


ALTER TABLE public.policy_tickets OWNER TO lnhtywgf;

--
-- Name: policy_tickets_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_tickets ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_tickets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: policy_triggers; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.policy_triggers (
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


ALTER TABLE public.policy_triggers OWNER TO lnhtywgf;

--
-- Name: policy_triggers_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.policy_triggers ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.policy_triggers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: profile_details; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.profile_details (
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


ALTER TABLE public.profile_details OWNER TO lnhtywgf;

--
-- Name: profile_details_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.profile_details ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.profile_details_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: project_implementation_domains; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.project_implementation_domains (
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


ALTER TABLE public.project_implementation_domains OWNER TO lnhtywgf;

--
-- Name: project_implementation_domains_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.project_implementation_domains ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_implementation_domains_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: project_issues; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.project_issues (
    id integer NOT NULL,
    name character varying(80),
    description text,
    project_id integer,
    status integer,
    extras json,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    images jsonb DEFAULT '[]'::jsonb,
    language integer
);


ALTER TABLE public.project_issues OWNER TO lnhtywgf;

--
-- Name: project_issues_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.project_issues ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_issues_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: project_section_plans; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.project_section_plans (
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


ALTER TABLE public.project_section_plans OWNER TO lnhtywgf;

--
-- Name: project_section_plans_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.project_section_plans ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_section_plans_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: project_stake_holders; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.project_stake_holders (
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
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    user_id integer
);


ALTER TABLE public.project_stake_holders OWNER TO lnhtywgf;

--
-- Name: project_stake_holders_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.project_stake_holders ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_stake_holders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: project_tasks; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.project_tasks (
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


ALTER TABLE public.project_tasks OWNER TO lnhtywgf;

--
-- Name: project_tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.project_tasks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.project_tasks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: projects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.projects (
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


ALTER TABLE public.projects OWNER TO lnhtywgf;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.projects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: quality_gates; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.quality_gates (
    id integer NOT NULL,
    name character varying(80),
    code character varying(10),
    auto_code character varying(15),
    description text,
    extras json,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.quality_gates OWNER TO lnhtywgf;

--
-- Name: quality_gates_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.quality_gates ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.quality_gates_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: record_parameters; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.record_parameters (
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
    approver_id integer,
    variation character varying(25),
    quality_gate_id integer,
    test_data_method_id integer,
    compliance_score double precision
);


ALTER TABLE public.record_parameters OWNER TO lnhtywgf;

--
-- Name: record_parameters_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.record_parameters ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.record_parameters_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rev_compliance_projects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.rev_compliance_projects (
    id integer NOT NULL,
    type integer,
    project_id integer,
    project_name character varying(100),
    project_name_ar character varying(100),
    project_description text,
    project_description_ar text,
    consumer_type integer,
    project_spoc integer,
    start_date date,
    end_date date,
    notes text,
    attachments jsonb DEFAULT '[]'::jsonb,
    answers jsonb,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rev_compliance_projects OWNER TO lnhtywgf;

--
-- Name: rev_compliance_projects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.rev_compliance_projects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rev_compliance_projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rev_compliance_record_comments; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.rev_compliance_record_comments (
    id integer NOT NULL,
    compliance_record_id integer,
    user_id integer,
    date date,
    comment text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rev_compliance_record_comments OWNER TO lnhtywgf;

--
-- Name: rev_compliance_record_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.rev_compliance_record_comments ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rev_compliance_record_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rev_compliance_records; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.rev_compliance_records (
    id integer NOT NULL,
    parameter_id integer,
    paramter_name text,
    stage_gate integer,
    mandate integer,
    attribute_id integer,
    attribute_name text,
    section_id integer,
    section_name text,
    platform_language character varying(20),
    result integer,
    attachment jsonb DEFAULT '[]'::jsonb,
    completed boolean DEFAULT false,
    status integer,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rev_compliance_records OWNER TO lnhtywgf;

--
-- Name: rev_compliance_records_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.rev_compliance_records ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rev_compliance_records_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rev_projects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.rev_projects (
    id integer NOT NULL,
    project_name character varying(100),
    project_name_ar character varying(100),
    project_description text,
    project_description_ar text,
    sponsor_id integer,
    owner_id integer,
    project_type_id integer,
    logo_code text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rev_projects OWNER TO lnhtywgf;

--
-- Name: rev_projects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.rev_projects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rev_projects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: rev_questions; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.rev_questions (
    id integer NOT NULL,
    compliance_project_type integer,
    question text,
    options character varying(255)[],
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.rev_questions OWNER TO lnhtywgf;

--
-- Name: rev_questions_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.rev_questions ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.rev_questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: risks; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.risks (
    id integer NOT NULL,
    name character varying(50),
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.risks OWNER TO lnhtywgf;

--
-- Name: risks_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.risks ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.risks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: roles; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.roles (
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


ALTER TABLE public.roles OWNER TO lnhtywgf;

--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.roles ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: schema_info; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.schema_info (
    version integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.schema_info OWNER TO lnhtywgf;

--
-- Name: section_contents; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.section_contents (
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


ALTER TABLE public.section_contents OWNER TO lnhtywgf;

--
-- Name: section_contents_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.section_contents ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.section_contents_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: stake_holders; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.stake_holders (
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


ALTER TABLE public.stake_holders OWNER TO lnhtywgf;

--
-- Name: stake_holders_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.stake_holders ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.stake_holders_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: subobjects; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.subobjects (
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


ALTER TABLE public.subobjects OWNER TO lnhtywgf;

--
-- Name: subobjects_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.subobjects ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.subobjects_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: test_data_methods; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.test_data_methods (
    id integer NOT NULL,
    name character varying(80),
    code character varying(10),
    auto_code character varying(15),
    description text,
    extras json,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.test_data_methods OWNER TO lnhtywgf;

--
-- Name: test_data_methods_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.test_data_methods ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.test_data_methods_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: trigger_types; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.trigger_types (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.trigger_types OWNER TO lnhtywgf;

--
-- Name: trigger_types_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.trigger_types ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.trigger_types_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: triggers; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.triggers (
    id integer NOT NULL,
    name text,
    description text,
    active boolean DEFAULT true,
    created_by integer,
    updated_by integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.triggers OWNER TO lnhtywgf;

--
-- Name: triggers_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.triggers ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.triggers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: public; Owner: lnhtywgf
--

CREATE TABLE public.users (
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
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    entity_ids integer[],
    temp_token character varying(100),
    auth jsonb DEFAULT '{}'::jsonb,
    phone character varying(20)
);


ALTER TABLE public.users OWNER TO lnhtywgf;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: lnhtywgf
--

ALTER TABLE public.users ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: applicable_sections applicable_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.applicable_sections
    ADD CONSTRAINT applicable_sections_pkey PRIMARY KEY (id);


--
-- Name: attribute_parameters attribute_parameters_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.attribute_parameters
    ADD CONSTRAINT attribute_parameters_pkey PRIMARY KEY (id);


--
-- Name: audit_logs audit_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.audit_logs
    ADD CONSTRAINT audit_logs_pkey PRIMARY KEY (id);


--
-- Name: beneficiaries beneficiaries_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.beneficiaries
    ADD CONSTRAINT beneficiaries_pkey PRIMARY KEY (id);


--
-- Name: beneficiary_profiles beneficiary_profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.beneficiary_profiles
    ADD CONSTRAINT beneficiary_profiles_pkey PRIMARY KEY (id);


--
-- Name: beneficiary_segments beneficiary_segments_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.beneficiary_segments
    ADD CONSTRAINT beneficiary_segments_pkey PRIMARY KEY (id);


--
-- Name: bill_decrees bill_decrees_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.bill_decrees
    ADD CONSTRAINT bill_decrees_pkey PRIMARY KEY (id);


--
-- Name: cases cases_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.cases
    ADD CONSTRAINT cases_pkey PRIMARY KEY (id);


--
-- Name: challenges challenges_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.challenges
    ADD CONSTRAINT challenges_pkey PRIMARY KEY (id);


--
-- Name: common_values common_values_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.common_values
    ADD CONSTRAINT common_values_pkey PRIMARY KEY (id);


--
-- Name: db_challenges db_challenges_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.db_challenges
    ADD CONSTRAINT db_challenges_pkey PRIMARY KEY (id);


--
-- Name: db_projects db_projects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.db_projects
    ADD CONSTRAINT db_projects_pkey PRIMARY KEY (id);


--
-- Name: entities entities_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.entities
    ADD CONSTRAINT entities_pkey PRIMARY KEY (id);


--
-- Name: entity_communications entity_communications_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.entity_communications
    ADD CONSTRAINT entity_communications_pkey PRIMARY KEY (id);


--
-- Name: entity_services entity_services_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.entity_services
    ADD CONSTRAINT entity_services_pkey PRIMARY KEY (id);


--
-- Name: extras extras_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.extras
    ADD CONSTRAINT extras_pkey PRIMARY KEY (id);


--
-- Name: object_questions object_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.object_questions
    ADD CONSTRAINT object_questions_pkey PRIMARY KEY (id);


--
-- Name: objects objects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.objects
    ADD CONSTRAINT objects_pkey PRIMARY KEY (id);


--
-- Name: outcomes outcomes_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.outcomes
    ADD CONSTRAINT outcomes_pkey PRIMARY KEY (id);


--
-- Name: policies policies_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policies
    ADD CONSTRAINT policies_pkey PRIMARY KEY (id);


--
-- Name: policy_impact_areas policy_impact_areas_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_impact_areas
    ADD CONSTRAINT policy_impact_areas_pkey PRIMARY KEY (id);


--
-- Name: policy_objects policy_objects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_objects
    ADD CONSTRAINT policy_objects_pkey PRIMARY KEY (id);


--
-- Name: policy_op_tasks policy_op_tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_op_tasks
    ADD CONSTRAINT policy_op_tasks_pkey PRIMARY KEY (id);


--
-- Name: policy_outcomes policy_outcomes_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_outcomes
    ADD CONSTRAINT policy_outcomes_pkey PRIMARY KEY (id);


--
-- Name: policy_queues policy_queues_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_queues
    ADD CONSTRAINT policy_queues_pkey PRIMARY KEY (id);


--
-- Name: policy_risks policy_risks_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_risks
    ADD CONSTRAINT policy_risks_pkey PRIMARY KEY (id);


--
-- Name: policy_sections policy_sections_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_sections
    ADD CONSTRAINT policy_sections_pkey PRIMARY KEY (id);


--
-- Name: policy_stages policy_stages_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_stages
    ADD CONSTRAINT policy_stages_pkey PRIMARY KEY (id);


--
-- Name: policy_subobjects policy_subobjects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_subobjects
    ADD CONSTRAINT policy_subobjects_pkey PRIMARY KEY (id);


--
-- Name: policy_tickets policy_tickets_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_tickets
    ADD CONSTRAINT policy_tickets_pkey PRIMARY KEY (id);


--
-- Name: policy_triggers policy_triggers_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.policy_triggers
    ADD CONSTRAINT policy_triggers_pkey PRIMARY KEY (id);


--
-- Name: profile_details profile_details_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.profile_details
    ADD CONSTRAINT profile_details_pkey PRIMARY KEY (id);


--
-- Name: project_implementation_domains project_implementation_domains_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.project_implementation_domains
    ADD CONSTRAINT project_implementation_domains_pkey PRIMARY KEY (id);


--
-- Name: project_issues project_issues_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.project_issues
    ADD CONSTRAINT project_issues_pkey PRIMARY KEY (id);


--
-- Name: project_section_plans project_section_plans_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.project_section_plans
    ADD CONSTRAINT project_section_plans_pkey PRIMARY KEY (id);


--
-- Name: project_stake_holders project_stake_holders_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.project_stake_holders
    ADD CONSTRAINT project_stake_holders_pkey PRIMARY KEY (id);


--
-- Name: project_tasks project_tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.project_tasks
    ADD CONSTRAINT project_tasks_pkey PRIMARY KEY (id);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- Name: quality_gates quality_gates_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.quality_gates
    ADD CONSTRAINT quality_gates_pkey PRIMARY KEY (id);


--
-- Name: record_parameters record_parameters_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.record_parameters
    ADD CONSTRAINT record_parameters_pkey PRIMARY KEY (id);


--
-- Name: rev_compliance_projects rev_compliance_projects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.rev_compliance_projects
    ADD CONSTRAINT rev_compliance_projects_pkey PRIMARY KEY (id);


--
-- Name: rev_compliance_record_comments rev_compliance_record_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.rev_compliance_record_comments
    ADD CONSTRAINT rev_compliance_record_comments_pkey PRIMARY KEY (id);


--
-- Name: rev_compliance_records rev_compliance_records_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.rev_compliance_records
    ADD CONSTRAINT rev_compliance_records_pkey PRIMARY KEY (id);


--
-- Name: rev_projects rev_projects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.rev_projects
    ADD CONSTRAINT rev_projects_pkey PRIMARY KEY (id);


--
-- Name: rev_questions rev_questions_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.rev_questions
    ADD CONSTRAINT rev_questions_pkey PRIMARY KEY (id);


--
-- Name: risks risks_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.risks
    ADD CONSTRAINT risks_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: section_contents section_contents_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.section_contents
    ADD CONSTRAINT section_contents_pkey PRIMARY KEY (id);


--
-- Name: stake_holders stake_holders_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.stake_holders
    ADD CONSTRAINT stake_holders_pkey PRIMARY KEY (id);


--
-- Name: subobjects subobjects_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.subobjects
    ADD CONSTRAINT subobjects_pkey PRIMARY KEY (id);


--
-- Name: test_data_methods test_data_methods_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.test_data_methods
    ADD CONSTRAINT test_data_methods_pkey PRIMARY KEY (id);


--
-- Name: trigger_types trigger_types_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.trigger_types
    ADD CONSTRAINT trigger_types_pkey PRIMARY KEY (id);


--
-- Name: triggers triggers_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.triggers
    ADD CONSTRAINT triggers_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: lnhtywgf
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

