# Distributed Hash Based Operator's Workplace

This is a web application which can also be saved and run without Internet.

The application implements the concept of Distributed Hash Referencing (https://github.com/LumaRay/distributed-hash-referencing-concept).

### A sample business process description:

##### New operator registration (R):

1. Operator saves his/her Social Security Number (SNILS/INN).
2. Operator saves his/her Full Name.
3. Operator saves his/her contact details.
4. Operator makes scans/photos of his/her passport (pages with ID, photo and address).
5. Operator makes scans/photos of his/her Social Security (SNILS/INN) document with his/her name and Number.
6. Operator makes scans/photos of his/her signed Appliance form.
7. Operator makes scans/photos of his/her signed Appliance confirmation form.
8. Operator thinks up a password.
9. Operator thinks up a sequence of hash/truncate algorithms he/she chooses to apply to the password (8).
10. The algorithms (9) are applied to the password (8).
11. A Private 11.1 and Public 11.2 Key pair is generated based on the output of (10).
12. The new Public Key is stored (11.2) in a database as a pair to (1).


##### Document management by an operator (M):

1. Put files of text (e.g. R1,R2,R3,R11.2), images (e.g. R4,R5,R6,R7), etc. in a new folder. 
2. Put other related folders with related documents in it.
3. Place hash references to other documents in the folder files or/and inner file/folder names.
4. Compress with arc or zip with 0+ compression level.
5. Put resulting archive in a new folder.
6. Calculate SHA3-256 hash from the operator's Public Key (R11.2).
7. Encrypt the archive contents with AES-256 using that hash as a key, save adding ".enc" to it's file name.
8. Delete the source archive.
9. Create a signature file of that (7) .enc file using the operator's Private Key (R11.1).
10. Calculate SHA3-512 hash of (7) .enc file contents.
11. Calculate SHA3-512 hash of (9) operator's signature file contents.
12. Calculate SHA3-512 hash of (10) and (11).
13. (optional) Create time stamp signature files of (12) using several Time Stamp Authorities web services. Place them in the same folder.
14. Set signatures' file names by inserting the services' domain names before ".enc" of (7) file name. 
15. (optional) Save (12) in a Bitcoin (in OP_RETURN or destination Address) or other cryptocurrency transaction on an operating real network.
16. (optional) Add an empty file to the folder (5) with extension ".bitcoin.transaction" (or other name if another cryptocurrency) and name containing Bitcoin transaction identifier that contains the saved hash from (15).
17. (optional) Send (12) to some email list as a subject (and/or in a body) - to save creation time in history.
18. Compress the (5) folder containing the (4), (7), (9), (13) files using zip with 0 compression level.
19. Calculate SHA3-512 hash of (18) archive.
20. Encode (19) with Base58 algorithm.
21. Set the file name of the new (18) archive as "APPLICATION-<ApplicationID>.DATE-<YYYY-mm-dd>.LEVEL-<nLevel>.OPERATION-TYPE-<OperationType>.OPERATOR-ID-<OperatorID>.SHA3-512-BASE58-<(20)>.__VERIFICATION-<VerificationCode>.zip"
	ApplicationID = (SomeUniqueApplicationIdentifier)
	nLevel = 
	OperationType - type of operation ("JOIN", "QUIT", "VOTE", "DONATE", ...)
	OperatorID = Left(Base58(SHA2-256(OperatorPublicKey)), 12)
	VerificationCode = Left(Base58(SHA2-256x2(FileNameBefore".__VERIFICATION", SHA2-256(OperatorPublicKey))), 6)

File name can be shortened to "A-<ApplicationID>.D-<YYYY-mm-dd>.L-<nLevel>.OP-<OperatorID>.OT-<OperationType>.S-<(20)>.__V-<VerificationCode>.zip"
