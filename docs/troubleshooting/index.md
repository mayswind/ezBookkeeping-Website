---
title: Troubleshooting
---

# Troubleshooting

ezBookkeeping outputs logs to `log/ezbookkeeping.log` by default. You can review this log file to troubleshoot issues.

## Log Format

ezBookkeeping includes three types of logs: general log, request log and query log. Each log entry contains a Trace ID associated with the current request or background task, which allows you to correlate all log entries for a single operation.

### General Log

The general log records various events and errors during system operation, helping you diagnose runtime status and troubleshoot issues. The format is as follows:

```
[YYYY-MM-DD HH:mm:ss] [Log Level] [Trace ID] [Source_Code_File.Function_Name] Log Message
```

### Request Log

The request log records information about each HTTP request, including the request method, URL, status code, response time and more. The format is as follows:

```
[YYYY-MM-DD HH:mm:ss] [REQUEST] [Trace ID] HTTP_Status_Code ezBookkeeping_Error_Code User_ID Client_IP Request_Method Request_URL Response_Time_ms
```

> If no error occurred during the request, the ezBookkeeping error code will be `0`.
>
> If the request was made by an unauthenticated user, the user ID will be `-`.

### Query Log

The query log records detailed information about each database query, including the SQL statement and execution time. The format is as follows:

```
[YYYY-MM-DD HH:mm:ss] [SQLQUERY] [SQL] [Trace ID] SQL Statement [Query Parameters] Execution_Time_ms
```

## Common Issues

### ezBookkeeping fails to start

When ezBookkeeping fails to start, the log will usually contain relevant error messages, such as insufficient permissions, configuration errors, port conflicts, or database connection failures. Review the log file for detailed error information and clues to help diagnose the issue.

If no log entries are recorded when starting ezBookkeeping, check whether your operating system meets the minimum system requirements. See [System Requirements](/installation/system_requirements) for details.

### Configuration changes not taking effect

ezBookkeeping loads configuration from the configuration file or environment variables at startup. If you modify a configuration item while ezBookkeeping is running, you must restart ezBookkeeping for the changes to take effect. Changes made to the configuration file will not take effect until ezBookkeeping is restarted.

At startup, ezBookkeeping outputs the current effective configuration values. You can review these values in the startup log to confirm whether the updated configuration has been loaded correctly.

In addition, some features in the frontend interface also depend on server-side configuration. ezBookkeeping passes server-side configuration to the frontend via `http://{YOUR_HOST_ADDRESS}/server_settings.js`. Please verify that your browser has loaded this URL correctly. If the browser has cached this file, try clearing the browser cache and reloading the page. The configuration parameter names in `server_settings.js` differ from those in the server-side configuration. You can refer to the source code [server_settings.go](https://github.com/mayswind/ezbookkeeping/blob/main/pkg/api/server_settings.go) for more details.

### Content display issues

If you encounter content display issues while using ezBookkeeping, such as uploaded user avatars or transaction images not displaying, links in email verification or password recovery emails being inaccessible, or OAuth 2.0 login not redirecting back to ezBookkeeping correctly, this may be caused by an incorrect access path configuration. ezBookkeeping uses the `domain` and `root_url` configuration items when generating these addresses.

Make sure the `domain` setting in your configuration is correct. If you're using a reverse proxy such as Nginx, and the access protocol or port number differs from what the ezBookkeeping server provides, you also need to update the `root_url` setting. For details, see [Configuration - Web Server](/configuration/#web-server). ezBookkeeping uses these settings to generate URLs for uploaded user avatars and transaction images.

If the images still don't appear after verifying these settings, you can use the developer tool in your browser to check whether the image URLs match the configured addresses. If they don't, review the configuration values shown in ezBookkeeping's startup logs to ensure they match your expected settings. If not, adjust the configuration or restart ezBookkeeping.

### Errors when importing data

For security reasons, ezBookkeeping does not display detailed error messages on the frontend when an import fails. Instead, these errors are recorded in the log. When a data import fails, ezBookkeeping logs the cause of the error along with the affected row number or record index. If you encounter errors during data import, review the log file for detailed error information and clues to help diagnose the issue.

### Other Issues

If you encounter other issues while using ezBookkeeping, you can refer to the [FAQ](/faq/) page, which collects common questions and their solutions. If you cannot find a solution there, you can seek community assistance through the following channels:

- Search for related discussions on GitHub Discussions: https://github.com/mayswind/ezbookkeeping/discussions
- Search for related issues on GitHub Issues: https://github.com/mayswind/ezbookkeeping/issues
- If neither of the above provides a solution, you can open a new discussion on GitHub Discussions, describe your problem, and ask the community for help.
