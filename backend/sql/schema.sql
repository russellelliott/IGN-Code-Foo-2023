DROP TABLE IF EXISTS poll cascade;
DROP TABLE IF EXISTS options cascade;

-- table for the poll question
CREATE TABLE poll(
    id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), --id for the poll
    data VARCHAR(512) --data
);

-- table for the poll options
CREATE TABLE options(
    id UUID UNIQUE PRIMARY KEY DEFAULT gen_random_uuid(), --question id
    pollid UUID DEFAULT gen_random_uuid(), --id of the poll it belongs to
    data VARCHAR(512), --data
    votes INT DEFAULT 0 --number of votes for that option. default is 0, since there are no votes initally
);
