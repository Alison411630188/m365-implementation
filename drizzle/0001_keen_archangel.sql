CREATE TABLE `searchable_content` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type` enum('tool','faq','case') NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`content` text,
	`keywords` text,
	`relatedId` varchar(64),
	`url` varchar(512),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `searchable_content_id` PRIMARY KEY(`id`)
);
