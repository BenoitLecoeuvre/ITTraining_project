﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webapi.Tools;

#nullable disable

namespace webapi.Migrations
{
    [DbContext(typeof(DataDbContext))]
    partial class DataDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("webapi.Models.Formateur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Anciennete")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Note")
                        .HasColumnType("int");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prenom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Formateurs");
                });

            modelBuilder.Entity("webapi.Models.Formation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Category")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DescriptionDetail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Difficulty")
                        .HasColumnType("int");

                    b.Property<int>("Duree")
                        .HasColumnType("int");

                    b.Property<DateTime>("EndDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("FormateurId")
                        .HasColumnType("int");

                    b.Property<int>("Lieu")
                        .HasColumnType("int");

                    b.Property<string>("Logo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("NbInscrit")
                        .HasColumnType("int");

                    b.Property<decimal>("Price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SubCategory")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FormateurId");

                    b.ToTable("Formations");
                });

            modelBuilder.Entity("webapi.Models.Message", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("id"));

                    b.Property<int>("ApprenantId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<bool>("ReadOrNot")
                        .HasColumnType("bit");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("ApprenantId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("webapi.Models.Todo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("DateRealisation")
                        .HasColumnType("datetime2");

                    b.Property<string>("Detail")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("FormationId")
                        .HasColumnType("int");

                    b.Property<string>("Nom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("FormationId");

                    b.ToTable("Todos");
                });

            modelBuilder.Entity("webapi.Models.Utilisateur", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prenom")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Utilisateur");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Utilisateur");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("webapi.Models.Apprenant", b =>
                {
                    b.HasBaseType("webapi.Models.Utilisateur");

                    b.Property<int?>("FormationId")
                        .HasColumnType("int");

                    b.Property<bool>("Inscrit")
                        .HasColumnType("bit");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasIndex("FormationId");

                    b.ToTable("Utilisateur");

                    b.HasDiscriminator().HasValue("Apprenant");
                });

            modelBuilder.Entity("webapi.Models.Formation", b =>
                {
                    b.HasOne("webapi.Models.Formateur", "Formateur")
                        .WithMany("FormationsList")
                        .HasForeignKey("FormateurId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Formateur");
                });

            modelBuilder.Entity("webapi.Models.Message", b =>
                {
                    b.HasOne("webapi.Models.Apprenant", "Apprenant")
                        .WithMany("MessagesList")
                        .HasForeignKey("ApprenantId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Apprenant");
                });

            modelBuilder.Entity("webapi.Models.Todo", b =>
                {
                    b.HasOne("webapi.Models.Formation", "Formation")
                        .WithMany("TodoList")
                        .HasForeignKey("FormationId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Formation");
                });

            modelBuilder.Entity("webapi.Models.Apprenant", b =>
                {
                    b.HasOne("webapi.Models.Formation", "Formation")
                        .WithMany("ApprenantsList")
                        .HasForeignKey("FormationId");

                    b.Navigation("Formation");
                });

            modelBuilder.Entity("webapi.Models.Formateur", b =>
                {
                    b.Navigation("FormationsList");
                });

            modelBuilder.Entity("webapi.Models.Formation", b =>
                {
                    b.Navigation("ApprenantsList");

                    b.Navigation("TodoList");
                });

            modelBuilder.Entity("webapi.Models.Apprenant", b =>
                {
                    b.Navigation("MessagesList");
                });
#pragma warning restore 612, 618
        }
    }
}
