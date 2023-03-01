using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using webapi.Tools;
using webapi.Helpers;
using System.Security.Claims;
using System.Text;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using FluentAssertions.Common;
using webapi.Models;
using webapi.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IRepository<Formation>, FormationRepository>();
builder.Services.AddScoped<IRepository<Formateur>, FormateurRepository>();
builder.Services.AddScoped<IRepository<Todo>, TodoRepository>();

// permet de r�cup�rer la section AppSetings du fichier appsettings.json
var appSettingsSection = builder.Configuration.GetSection(nameof(AppSettings));
// on l'enregistre dans les services
builder.Services.Configure<AppSettings>(appSettingsSection);

AppSettings appSettings = appSettingsSection.Get<AppSettings>();

//string connectionString = builder.Configuration.GetConnectionString("DefaultConnection")!;
//builder.Services.AddDbContext<DataDbContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddControllers();
builder.Services.AddDbContext<DataDbContext>();

// Add services to the container.


var key = Encoding.ASCII.GetBytes(appSettings.SecretKey);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters()
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateLifetime = true,
            ValidateAudience = true,
            ValidAudience = appSettings.ValidAudience,
            ValidateIssuer = true,
            ValidIssuer = appSettings.ValidIssuer,
            ClockSkew = TimeSpan.Zero
        };
    });


builder.Services.AddAuthorization(options =>
{
    options.AddPolicy(Constants.PolicyAdmin, police =>
    {
        police.RequireClaim(ClaimTypes.Role, Constants.RoleAdmin);
    });
    options.AddPolicy(Constants.PolicyUser, police =>
    {
        police.RequireClaim(ClaimTypes.Role, Constants.RoleUser);
    });
});

// Au cas o�
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ITTrainingAPI", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "JWT Authorization header using the Bearer scheme.",
        Name = "Authorization",
        Scheme = "Bearer",
        BearerFormat = "JWT",
        Type = SecuritySchemeType.Http
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement {
                   {
                     new OpenApiSecurityScheme                     {
                       Reference = new OpenApiReference                       {
                         Type = ReferenceType.SecurityScheme,
                         Id = "Bearer"                       }
                      },
                      new string[] { }
                    }
                });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(option =>
{
    option.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
});

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
