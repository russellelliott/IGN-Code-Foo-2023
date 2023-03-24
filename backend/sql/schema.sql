DROP TABLE IF EXISTS poll cascade;
DROP TABLE IF EXISTS options cascade;

-- table for the poll question
CREATE TABLE poll(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), data VARCHAR(512));

-- table for the poll options
CREATE TABLE options(id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), parent UUID DEFAULT gen_random_uuid(), data VARCHAR(512), votes INT);
