CREATE SCHEMA `aws_architecture_questions_project`;

USE `aws_architecture_questions_project`;

CREATE TABLE questions 
(title VARCHAR(500),
question VARCHAR(1000),
answer VARCHAR(1000),
srcImg VARCHAR(500),
descriptionP VARCHAR(1500));

CREATE TABLE options
(option1 VARCHAR(1000),
option2 VARCHAR(1000),
option3 VARCHAR(1000),
option4 VARCHAR(1000),
option5 VARCHAR(1000));

ALTER TABLE questions ADD PRIMARY KEY (title);

INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 1!",
"What the most efficient service can integrate data files from its on-premises with AWS Cloud via an NFS interface?",
"Storage Gateway - File Gateway.",
"",
"AWS Storage Gateway's file interface, or file gateway, offers you a seamless way to connect to the cloud in order to store application data files and backup images as durable objects on Amazon S3 cloud storage. File gateway offers SMB or NFS-based access to data in Amazon S3 with local caching."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 2!",
"What feature of an Amazon S3 bucket only be suspended and not disabled once it have been enabled?",
"Versioning.",
"",
"Once you version-enable a bucket, it can never return to an unversioned state. Versioning can only be suspended once it has been enabled."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 3!",
"Massive volumes of data that can be divided into two categories. The 'hot data' need to be both processed and stored quickly in a parallel and distributed fashion. The 'cold data need to be kept for reference with quick access for reads and updates at a low cost. What AWS services is BEST suited to accelerate the process?",
"Amazon FSx for Lustre.",
"",
"FSx for Lustre provides the ability to both process the 'hot data' in a parallel and distributed fashion as well as easily store the 'cold data' on Amazon S3."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 4!",
"A company utilizes User Datagram Protocol and needs to support fast regional failover in case an AWS Region goes down. The company wants to continue using its own custom Domain Name System (DNS) service. What AWS service represent the best solution?",
"Global Accelerator.",
"",
"AWS Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 5!",
"A company has a web application that runs 24*7 in the production environment. The company runs a clone of the same application in the dev environment for up to 8 hours every day. The company wants to build the MOST cost-optimal solution by deploying these applications using the best-fit pricing options for EC2 instances. What would you recommend?",
"Use EC2 reserved instance for the production and on-demand instances for the dev.",
"",
"For the given use case, you can use Amazon EC2 Reserved Instances for the prodution application as it is run 24*7; This way you can get a 72% discount if you avail a 3-year term. You can use on-demand instances for the dev application since it is only used for up to 8 hours per day. On-demand offers the flexibility to only pay for the Amazon EC2 instance when it is being used (0 to 8 hours for the given use case)."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 6!",
"A market need to support both stateful and stateless client-server communications via the application programming interface (APIs) developed using its platform. You have been hired by the startup to build a solution to fulfill this market need using Amazon API Gateway.",
"Amazon API Gateway creates RESTful APIs that enable stateless client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full duplex communication between client and server.",
"",
"Amazon API Gateway creates RESTful APIs that: are HTTP-based. Enable stateless client-server communication. Implement standard HTTP methos such as GET, POST, PUT, PATCH, and DELETE. Also, Amazon API Gateway creates WebSocket APIs that: adhere to the WebSocket protocol, which enables stateful, full-duplex communication between client and server. Route incoming messages based on message content. So Amazon API Gateway supports stateless RESTful APIs as well as stateful WebSocket APIs."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 7!",
"Amazon SQS is used for migrate several core applications to the cloud to ensure high availability and cost efficiency. The development team expects a peak rate of about 1000 messages per second to be processed via SQS. It is important that the messages are processed in order. Which option can be used to implement this system?",
"SQS FIFO (Fist-In-Fist-Out) queue in batch mode of 4 messages per operation to process the messages at the peak rate.",
"",
"By default, FIFO queues support up to 300 messages per second (300 send, receive, or delete operations per second). When you batch 10 messages per operation (maximum), FIFO queues can support up to 3,000 messages per second. Therefore you need to process 4 messages per operations so that the FIFO queue can support up to 1200 messages per second, which is well within the peak rate."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 8!",
"An EC2 instance 1A is running in AWS Region A. Later, it was created a new Amazon Machine Image (AMI) in Region A from a snapshot. This AMI is then copied into another Region B. It was provisioned an instance 1B in Region B using this new AMI in Region B. What entities exist in Region B?",
"1 EC2 instance, 1 AMI and 1 snapshot exist in Region B.",
"",
"An AMI provides the information required to launch an instance. You must specify an AMI when you launch an instance. When the new AMI is copied from Region A into Region B, it automatically creates a snapshot in Region B because AMIs are based on the underlying snapshots. Further, an instance is created from this AMI in Region B. Hence, we have 1 EC2, 1AMI and 1 snapshot in Region B."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 9!",
"A Fleet of EC2 instances realized a specialized task that must deliver high random I/O performance. Each instance in the fleet would have access to a dataset that is replicated across the instances by the application itself. Because of the resilient application architecture, the specialized task would continue to be processed even if any instance goes down, as the underlying application would ensure the replacement instance has access to the required dataset. Which of the following options is the MOST cost-optimal and resource-efficient solution to build this fleet of EC2 instances?",
"Use Instance Store based EC2 instances.",
"",
"An instance store provides temporary block-level storage for your instance. This storage is located on disks that are physically attached to the host instance. Instance store is ideal for the temporary storage of information that changes frequently such as buffers, caches, scratch data, and other temporary content, or for data that is replicated across a fleet of instances, such as a load-balanced pool of web servers. Instance store volumes are included as part of the instance's usage cost. As Instance Store based volumes provide high random I/O performance at low cost (as the storage is part of the instance's usage cost) and the resilient architecture can adjust for the loss of any instance, therefore you should use Instance Store based EC2 instances for this use-case."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 10!",
"Multiple microservices running on EC2 instances under an ALB. The team wants ti route traffic to multiple back-end services based on the URL path of the HTTP header. So it wants request for https://www.test.com/orders to go to a specific microservice and request for https://www.test.com/products to go to another microservice. Which of the following features of ALB can be used?",
"Path-based Routing.",
"",
"Path-based Routing: you can route a client request based on the URL path of the HTTP header. You can use path conditions to define rules that route request based on the URL in the request (also known as path-based routing). The path pattern is applied only to the URL, not to its query parameters."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 11!",
"A dynamic website is hosted using on-premises servers in its data center in the USA. The company is lauching its website in ASIA, and it wants to optimize the website loading times for new users in ASIA. The website's backend must remain in the USA. The website is being launched in a few days, and an immediate solutions is needed. What would you recommend?",
"Use CloudFront with a custom origin pointing to the on-premises servers.",
"",
"CloudFront is a web service that gives businesses and web application developers an easy cost-effective way to distribute content with low latency and high data transfer speeds. CloudFront uses standard cache control headers you set on your files to identify static and dynamic content. You can use different origins for different types of content on a single site - e.g. S3 for static objects, EC2 for dynamic content, and custom origins for third-party content. An origin server stores the original, definitive version of your objects. If you're serving content over HTTP, your origin server is either an S3 bucket or an HTTP server, such as a web server. Your HTTP server can run on an EC2 instance or on a server that you manage, these servers are also known as custom origins."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 12!",
"A company maintains the data for the last 100 years. The data has a velocity of 1 GB per minute. You would like to store the data with only the most relevant attributes. What AWS services would you use to build the most cost-effective solution with the LEAST amount of infrastructure maintenance?",
"Ingest the data in Amazon Kinesis Data Firehose and use an intermediary AWS Lambda function to filter and transform the incoming stream before the output is dumped on S3.",
"",
"Amazon Kinesis Data Firehose is the easiest way to load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into S3, Amazon Redshift, Amazon OpenSearch Service, and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you're already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security. So, ingest the data in Amazon Kinesis Data Firehose and use a AWS Lambda function to filter and transform the incoming data before the output is dumped on S3. This way you only need to store a sliced version of the data with only the relevant data attributes required for your model. Also it should be noted that this solution is entirely serveless and requires no infrastructure maintenance."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 13!",
"A junior scientist is trying to upload a high-resolution image into S3. The image size is approximately 3 gigabytes. The junior scientist is using S3 Transfer Acceleration (Amazon S3TA) for faster image upload. It turns out that Amazon S3TA did not result in an accelerated transfer. Given this scenario, which of the following is correct regarding the charges for this image transfer?",
"The junior scientist does not need to pay any transfer charges for the image upload.",
"",
"There are no S3 data transfer charges when data is transferred in from the internet. Also with S3TA, you pay only for transfer that are accelerated. Therefore the junior scientist does not need to pay any transfer charges for the image upload because S3TA did not result in an accelerated transfer."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 14!",
"A company wants to set up an AWS cloud architecture that throttles request in case of sudden traffic spikes. The company is looking for AWS services that can be used for buffering or throttling to handle such traffic variations. Which of the following services can be used to support this requirement?",
"Amazon API Gateway, Amazon SQS and Amazon Kinesis.",
"",
"Throttling is the process of limiting the number of requests an authorized program can submit to a given operation in a given amount of time. To prevent your API from being overwhelmed by too many requests, Amazon API Gateway throttles requests to your API using the token bucket algorithm, where a token counts for a request. Specifically, API Gateway sets a limit on a steady-state rate and a burst of request submissions against all APIs in your account. In the token bucket algorithm, the burst is the maximum bucket size. SQS is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serveless applications. SQS offers buffer capabilities to smooth out temporary volume spikes without losing messages or increasing latency. Amazon Kinesis is a fully managed, scalable service that can ingest, buffer, and process streaming data in real time."
);
INSERT INTO questions (
title, question, answer, srcImg, descriptionP) VALUES (
"🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 15!",
"A new DevOps enginner wants to understand the replication capabilities for RDS Multi-AZ deployment as well as RDS Read-Replicas. Which of the following correctly summarizes these capabilities?",
"Multi-AZ follows synchronous replication and spans at least two Availability Zones (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region.",
"",
"RDS Multi-AZ deployments provide enhanced availability and durability for RDS database instances, making them a natural fit for production database workloads. When you provision a Multi-AZ DB instance, RDS automatically creates a primary DB instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ). Multi-AZ spans at least two Availability Zones (AZs) within a single region. RDS Read Replicas provide enhanced performance and durability for RDS database instances. They make it easy to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads. For the MySQL, MariaDB, PostgreSQL, Oracle, and SQL Server database engines, RDS creates a second DB instance using a snapshot of the source DB instance. It then uses the engines' native asynchrounous replication to update the read replica whenever there is a change to the source DB instance. RDS replicates all databases in the source DB instance. Read replicas can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region."
);

INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Storage Gateway - Volume Gateway.",
"b) Site-to-Site VPN.",
"c) Storage Gateway - File Gateway.",
"d) Storage Gateway - Tape Gateway.",
"e) Instance Store."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Requester Pays.",
"b) Server Access Logging.",
"c) Versioning.",
"d) Policies.",
"e) Static Website Hosting."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) EMR.",
"b) Glue.",
"c) S3 Glacier Deep Archive.",
"d) Amazon FSx for Windows File Server.",
"e) Amazon FSx for Lustre."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) CloudFront.",
"b) Third-Party services.",
"c) Route 53.",
"d) Global Accelerator.",
"e) ELB."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Use EC2 reserved instance for the production and spot instances for the dev.",
"b) Use EC2 reserved instance for the production and spot block intances for the dev.",
"c) Use EC2 reserved instance for the production and on-demand instances for the dev.",
"d) Use only EC2 on-demand instaces for the production and dev.",
"e) Use on-demand EC2 instances for the production and spot intances for the dev."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Amazon API Gateway creates RESTful APIs that enable stateful client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full duplex communication between client and server.",
"b) Amazon API Gateway creates RESTful APIs that enable stateless client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateful, full duplex communication between client and server.",
"c) Amazon API Gateway creates RESTful APIs that enable stateless client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateless, full duplex communication between client and server.",
"d) Amazon API Gateway creates RESTful APIs that enable both stateless and stateful client-server communication.",
"e) Amazon API Gateway creates RESTful APIs that enable stateful client-server communication and Amazon API Gateway also creates WebSocket APIs that adhere to the WebSocket protocol, which enables stateless, full duplex communication between client and server."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Use SQS standard queue to process the messages.",
"b) SQS FIFO (First-In-First-Out) queue in batch mode of 2 messages per operation to process the messages at the peak rate.",
"c) SQS FIFO (First-In-First-Out) queue to process the messages.",
"d) SQS FIFO (Fist-In-Fist-Out) queue in batch mode of 4 messages per operation to process the messages at the peak rate.",
"e) Use both SQS standard queue and SQS FIFO queue to process the messages."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) 1 EC2 instance and 1 snapshot exist in Region B.",
"b) 1 EC2 instance and 1 AMI exist in Region B.",
"c) 1 EC2 instance, 1 AMI and 2 snapshots.",
"d) 1 EC2 instance and 2 AMIs exist in Region B.",
"e) 1 EC2 instance, 1 AMI and 1 snapshot exist in Region B."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Use EBS based EC2 instances.",
"b) Use EC2 instances with access to S3 based storage.",
"c) Use EC2 instances with EFS mount points.",
"d) Use EC2 instances with EBS and EFS mount points.",
"e) Use Instance Store based EC2 instances."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Host-based Routing.",
"b) Query string parameter-based routing.",
"c) Path-based Routing.",
"d) HTTP method-based routing.",
"e) HTTP header-based routing."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Leverage a Route 53 geo-proximity routing policy pointing to on-premises servers.",
"b) Migrate the website to S3. Use S3 cross-region replication (S3 CRR) between AWS Regions in the USA and ASIA.",
"c) Use CloudFront with a custom origin pointing to the DNS record of the website on Route 53.",
"d) Use CloudFront with a custom origin pointing to the on-premises servers.",
"e) Migrate the dynamic website to EC2."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Ingest the data in Amazon Kinesis Data Firehose and use an intermediary AWS Lambda function to filter and transform the incoming stream before the output is dumped on S3.",
"b) Ingest the data in a Spark Streaming Cluster on EMR and use Spark Streaming transformations before writing to S3.",
"c) Ingest the data in Amazon Kinesis Data Streams and use an intermediary AWS Lambda function to filter and transform the incoming stream before the output is dumped on S3.",
"d) Ingest the data in Amazon Kinesis Data Analytics and use Amazon Kinesis Data Firehose to filter and transform the data before the output is dumped on S3.",
"e) Ingest the data in Amazon Kinesis Data Analytics and use SQL queries to filter and transform the data before writing to S3."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) The junior scientist needs to pay both S3 transfer charges and S3TA transfer charges for the image upload.",
"b) The junior scientist only needs to pay S3 transfer charges for the image upload.",
"c) The junior scientist does not need to pay any transfer charges for the image upload.",
"d) The junior scientist needs to pay size image, S3 transfer charges and S3TA transfer charges for the image upload.",
"e) The junior scientist only needs to pay S3TA transfer charges for the image upload."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Amazon SQS, Amazon SNS and AWS Lambda.",
"b) Amazon API Gateway, Amazon SQS and Amazon Kinesis.",
"c) Amazon Gateway Endopoints, Amazon SNS and AWS Lambda.",
"d) Amazon Gateway Endpoints, Amazon SQS and Amazon Kinesis.",
"e) Elastic Load Balancer, Amazon SQS and AWS Lambda."
);
INSERT INTO options (
option1, option2, option3, option4, option5) VALUES (
"a) Multi-AZ follows synchronous replication and spans at least two Availability Zones (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region.",
"b) Multi-AZ follows synchronous replication and spans at least two regions. Read replicas follow synchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region.",
"c) Multi-AZ follows asynchronous replication and spans one Availability Zone (AZ) within a single region. Read replicas follow synchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region.",
"d) Multi-AZ follows asynchronous replication and spans at least two Availability Zones (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region.",
"e) Multi-AZ follows asynchronous replication and spans at least two Availability Zone (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region."
);

SELECT * FROM questions;
SELECT * FROM options;

SELECT * FROM questions ORDER BY title ASC;
SELECT * FROM questions ORDER BY title DESC;
SELECT * FROM options ORDER BY option1 ASC;
SELECT * FROM options ORDER BY option1 DESC;

SELECT title AS title_architecture, question, answer AS answer_architecture, srcImg, descriptionP AS description_architecture FROM questions;
SELECT option1 AS option_first, option2, option3 AS option_third, option4, option5 AS option_fifth FROM options;

SELECT title, question FROM questions WHERE answer = 'Global Accelerator.';
SELECT answer, descriptionP FROM questions WHERE title = "🏆 Wellcome!!! Deep in the Content and Lost in the Knowledge - Resolution 10!";
SELECT option2, option4 AS option_fourth FROM options WHERE option1 = 'a) Use EBS based EC2 instances.' AND option3 = 'c) Use EC2 instances with EFS mount points.';
SELECT option2, option4 AS option_fourth FROM options WHERE NOT(option1 = 'a) Use EBS based EC2 instances.') AND NOT(option3 = 'c) Use EC2 instances with EFS mount points.');
SELECT option1 AS option_first, option3 FROM options WHERE option2 = 'b) Glue.' OR option5 = 'e) Multi-AZ follows asynchronous replication and spans at least two Availability Zone (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region.';
SELECT option1 AS option_first, option3 FROM options WHERE NOT(option2 = 'b) Glue.') AND NOT(option5 = 'e) Multi-AZ follows asynchronous replication and spans at least two Availability Zone (AZs) within a single region. Read replicas follow asynchronous replication and can be within an Availability Zone (AZ), Cross-AZ, or Cross-Region.');

SELECT title FROM questions WHERE answer IN ('Amazon FSx for Lustre.', 'Versioning.'); 

SELECT answer AS answer_correct FROM questions WHERE answer LIKE 'SQS%';
SELECT * FROM options WHERE option1 LIKE '%EC2%';
SELECT * FROM options WHERE option1 OR option2 OR option3 OR option4 OR option5 LIKE '%EC2%';

SELECT DISTINCT descriptionP FROM questions;  

SELECT descriptionP FROM questions LIMIT 5;
SELECT option1, option3 FROM options LIMIT 3;


 