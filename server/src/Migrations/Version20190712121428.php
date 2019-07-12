<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190712121428 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('CREATE TEMPORARY TABLE __temp__brand AS SELECT id FROM brand');
        $this->addSql('DROP TABLE brand');
        $this->addSql('CREATE TABLE brand (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, description VARCHAR(255) NOT NULL)');
        $this->addSql('INSERT INTO brand (id) SELECT id FROM __temp__brand');
        $this->addSql('DROP TABLE __temp__brand');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_1C52F9586DE44026 ON brand (description)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'sqlite', 'Migration can only be executed safely on \'sqlite\'.');

        $this->addSql('DROP INDEX UNIQ_1C52F9586DE44026');
        $this->addSql('CREATE TEMPORARY TABLE __temp__brand AS SELECT id FROM brand');
        $this->addSql('DROP TABLE brand');
        $this->addSql('CREATE TABLE brand (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL)');
        $this->addSql('INSERT INTO brand (id) SELECT id FROM __temp__brand');
        $this->addSql('DROP TABLE __temp__brand');
    }
}
