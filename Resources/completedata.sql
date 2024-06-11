create table national_od(
	drugID INT,
	State VARCHAR,
	Year INT,
	DataValue INT,
	CONSTRAINT drugID PRIMARY KEY (
        drugID
     )
);

create table crime_data(
	crimeID INT,
	State VARCHAR,
	Year INT,
	CrimeData INT,
	CONSTRAINT crimeID PRIMARY KEY (
        crimeID
     )
);
	
CREATE TABLE completedata AS
        SELECT national_od.drugID, national_od.State, national_od.Year, national_od.DataValue, crime_data.CrimeData
        FROM national_od JOIN crime_data
        ON national_od.drugID = crime_data.crimeID

SELECT *
FROM completedata